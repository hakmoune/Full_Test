import { IUser } from "../../types/types";

interface IProps {
  usersSelected: number[];
  setUsersSelected: React.Dispatch<React.SetStateAction<number[]>>;
  users: IUser[];
}
export default function SelectAllUsers({
  usersSelected,
  setUsersSelected,
  users,
}: IProps) {
  const handleCheckboxChange = () => {
    setUsersSelected((prevState) => {
      return prevState.length !== users.length
        ? users.map((user) => user.id)
        : [];
    });
  };

  return (
    <div className="selected-items">
      <input
        type="checkbox"
        checked={users.length > 0 && users.length === usersSelected.length}
        onChange={() => handleCheckboxChange()}
      />
      <strong>{usersSelected.length}</strong> elements selected
    </div>
  );
}
