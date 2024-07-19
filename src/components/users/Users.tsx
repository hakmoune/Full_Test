import User from "./User";
import { IUser } from "../../types/types";

interface IProps {
  users: IUser[];
  usersSelected: number[];
  setUsersSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function Users({
  users,
  usersSelected,
  setUsersSelected,
}: IProps) {
  return (
    <div className="users-container">
      {users?.map((user) => (
        <User
          user={user}
          key={user.id}
          usersSelected={usersSelected}
          setUsersSelected={setUsersSelected}
        />
      ))}
    </div>
  );
}
