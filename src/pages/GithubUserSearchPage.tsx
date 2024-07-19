import { useState } from "react";
import "../css/GithubUserSearchPage.css";
import DeleteUsers from "../components/users/DeleteUsers";
import DuplicateUsers from "../components/users/DuplicateUsers";
import SearchUsers from "../components/users/SearchUsers";
import SelectAllUsers from "../components/users/SelectAllUsers";
import Users from "../components/users/Users";
import useUsersSearch from "../hooks/useUsersSearch";
import Title from "../components/common/Title";

export default function GithubUserSearchPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [usersSelected, setUsersSelected] = useState<number[]>([]);
  const { users, setUsers } = useUsersSearch(searchQuery);

  return (
    <div className="container">
      <Title />

      <SearchUsers
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setUsersSelected={setUsersSelected}
      />

      <div className="actions">
        <SelectAllUsers
          usersSelected={usersSelected}
          setUsersSelected={setUsersSelected}
          users={users}
        />
        <div>
          <DuplicateUsers setUsers={setUsers} usersSelected={usersSelected} />
          <DeleteUsers
            setUsers={setUsers}
            usersSelected={usersSelected}
            setUsersSelected={setUsersSelected}
          />
        </div>
      </div>

      <Users
        users={users}
        usersSelected={usersSelected}
        setUsersSelected={setUsersSelected}
      />
    </div>
  );
}
