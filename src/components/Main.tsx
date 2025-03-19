import styles from "./Main.module.css";
import ReactMarkdown from "react-markdown";

type newNoteType = {
  id: string;
  title: string;
  content: string;
  modDate: number;
};

const Main = ({
  activeNote,
  onUpdateNote,
}: {
  activeNote: newNoteType | undefined;
  onUpdateNote: (updateNote: newNoteType) => void;
}) => {
  const onEditNote = ({ key, value }: { key: string; value: string }) => {
    if (!activeNote) return;
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return (
      <div className={styles.noActiveNote}>ノートが選択されていません</div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.mainNoteEdit}>
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote({ key: "title", value: e.target.value })}
        />
        <textarea
          id="content"
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) =>
            onEditNote({ key: "content", value: e.target.value })
          }
        ></textarea>
      </div>
      <div className={styles.mainNotePrev}>
        <h1 className={styles.prevTitle}>{activeNote.title}</h1>
        <div className={styles.markdownPrev}>
          <ReactMarkdown>{activeNote.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Main;
