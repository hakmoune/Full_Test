import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IUser } from "../../types/types";

interface IProps {
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  usersSelected: number[];
  setUsersSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function DeleteUsers({
  setUsers,
  usersSelected,
  setUsersSelected,
}: IProps) {
  const handleDelete = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setUsers((prevState) =>
      prevState.filter((user) => !usersSelected.includes(user.id))
    );
    setUsersSelected([]);
  };

  return (
    <a href="#" onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrashCan} className="custom-icon" />
    </a>
  );
}
