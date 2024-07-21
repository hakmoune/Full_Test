import User from "./User";
import { IUser } from "../../types/types";

interface IProps {
  users: IUser[];
  usersSelected: number[];
  setUsersSelected: React.Dispatch<React.SetStateAction<number[]>>;
  editMode: boolean;
}

export default function Users({
  users,
  usersSelected,
  setUsersSelected,
  editMode,
}: IProps) {
  return (
    <div className="users-container">
      {users?.map((user) => (
        <User
          user={user}
          key={user.id}
          usersSelected={usersSelected}
          setUsersSelected={setUsersSelected}
          editMode={editMode}
        />
      ))}
    </div>
  );
}
