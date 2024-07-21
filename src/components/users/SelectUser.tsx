interface IProps {
  setUsersSelected: React.Dispatch<React.SetStateAction<number[]>>;
  userId: number;
  usersSelected: number[];
  editMode: boolean;
}

export default function SelectUser({
  setUsersSelected,
  userId,
  usersSelected,
  editMode,
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
      className={`checkbox ${editMode ? "" : "displayed"}`}
      checked={usersSelected.includes(userId)}
      onChange={() => handleCheckboxChange(userId)}
    />
  );
}
