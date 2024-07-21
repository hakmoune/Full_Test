import { IUser } from "../../types/types";
import { concatString } from "../../utils/concatString";
import SelectUser from "./SelectUser";

interface IProps {
  user: IUser;
  usersSelected: number[];
  setUsersSelected: React.Dispatch<React.SetStateAction<number[]>>;
  editMode: boolean;
}

export default function User({
  user,
  usersSelected,
  setUsersSelected,
  editMode,
}: IProps) {
  return (
    <div className="item">
      <SelectUser
        setUsersSelected={setUsersSelected}
        usersSelected={usersSelected}
        userId={user.id}
        editMode={editMode}
      />
      <div className="infos">
        <span>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
        </span>
        <span>{user.id}</span>
        <span>{concatString(user.login, 10, 7, "...")}</span>
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
  );
}
