interface IProps {
  setUsersSelected: React.Dispatch<React.SetStateAction<number[]>>;
  userId: number;
  usersSelected: number[];
}

export default function SelectUser({
  setUsersSelected,
  userId,
  usersSelected,
}: IProps) {
  const handleCheckboxChange = (id: number) => {
    setUsersSelected((prevState) => {
      return prevState.includes(id)
        ? prevState.filter((userId) => userId !== id)
        : [...prevState, id];
    });
  };

  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={usersSelected.includes(userId)}
      onChange={() => handleCheckboxChange(userId)}
    />
  );
}
