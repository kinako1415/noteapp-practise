import styles from "./Sidebar.module.css";

type newNoteType = {
  id: string;
  title: string;
  content: string;
  modDate: number;
};

const Sidebar = ({
  onAddNote,
  onDeleteNote,
  notes,
  activeNote,
  setActiveNote,
}: {
  onAddNote: () => void;
  onDeleteNote: (id: string) => void;
  notes: newNoteType[];
  activeNote: string;
  setActiveNote: (activeNote: string) => void;
}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className={styles.notes}>
        {notes.map((note, index) => {
          return (
            <div
              key={index}
              className={`${styles.note} ${
                note.id === activeNote && styles.active
              }`}
              onClick={() => {
                setActiveNote(note.id);
              }}
            >
              <div className={styles.title}>
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>削除</button>
              </div>
              <p>{note.content}</p>
              <small>
                最後の修正日:{" "}
                {new Date(note.modDate).toLocaleDateString("ja-JP", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
