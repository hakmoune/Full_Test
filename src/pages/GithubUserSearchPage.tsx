import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCopy } from "@fortawesome/free-solid-svg-icons";
import "../css/GithubUserSearchPage.css";

interface IUser {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export default function GithubUserSearchPage() {
  const [users, setUsers] = useState<IUser[]>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (!searchQuery) return;

    const searchUsers = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${searchQuery}`
        );
        const data = await response.json();
        setUsers(data.items);
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    };

    searchUsers();
    console.log(users);
  }, [searchQuery]);

  const concatStr = (str: string, target: number, stopAt: number) => {
    return str.length > target ? `${str.slice(0, stopAt)}...` : str;
  };

  return (
    <div className="container">
      <div className="title">
        <h4>Github Search</h4>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search input"
          className="input-field"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="actions">
        <span className="selected-items">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <strong>3</strong> elements selected
        </span>
        <span>
          <a href="#">
            <FontAwesomeIcon icon={faCopy} className="custom-icon" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTrashCan} className="custom-icon" />
          </a>
        </span>
      </div>
      <div className="users-container">
        {users &&
          users.map((user) => (
            <div className="item" key={user.id}>
              <input type="checkbox" className="checkbox" />
              <div className="infos">
                <span>
                  <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                </span>
                <span>{user.id}</span>
                <span>{concatStr(user.login, 13, 10)}</span>
              </div>
              <a
                href={user.html_url}
                target="_blank"
                type="button"
                className="btn-profile"
              >
                View profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
