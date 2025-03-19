import styles from "./Main.module.css";

type newNoteType = {
  id: string;
  title: string;
  content: string;
  modDate: number;
};

const Main = ({ activeNote }: { activeNote: newNoteType }) => {
  if (!activeNote) {
    return (
      <div className={styles.noActiveNote}>ノートが選択されていません</div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.mainNoteEdit}>
        <input type="text" />
        <textarea id="" placeholder="ノート内容を記入"></textarea>
      </div>
      <div className={styles.mainNotePrev}>
        <h1 className={styles.prevTitle}>{activeNote.title}</h1>
        <div className={styles.markdownPrev}>{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
