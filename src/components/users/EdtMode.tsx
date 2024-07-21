interface IProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EdtMode({ editMode, setEditMode }: IProps) {
  return (
    <div className="edit-mode">
      <input
        type="checkbox"
        checked={editMode}
        onChange={(e) => setEditMode(e.target.checked)}
      />
      <span>Edit mode.</span>
    </div>
  );
}
