interface IProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setUsersSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function SearchUsers({
  searchQuery,
  setSearchQuery,
  setUsersSelected,
}: IProps) {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setUsersSelected([]);
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search input"
        className="input-field"
        value={searchQuery}
        onChange={handleTextChange}
      />
    </div>
  );
}
