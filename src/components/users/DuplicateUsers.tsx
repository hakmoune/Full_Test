import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IUser } from "../../types/types";

interface IProps {
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  usersSelected: number[];
}

export default function DuplicateUsers({ setUsers, usersSelected }: IProps) {
  const handleDuplicate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    setUsers((prevState) => {
      const selectedUsers = prevState.filter((user) =>
        usersSelected.includes(user.id)
      );
      const duplicates = selectedUsers.map((user) => ({
        ...user,
        id: Math.floor(Math.random() * 100000 + 1),
      }));
      return [...prevState, ...duplicates];
    });
  };

  return (
    <a href="#" onClick={handleDuplicate}>
      <FontAwesomeIcon icon={faCopy} className="custom-icon" />
    </a>
  );
}
