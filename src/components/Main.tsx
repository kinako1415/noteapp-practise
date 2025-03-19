import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainNoteEdit}>
        <input type="text" />
        <textarea id="" placeholder="ノート内容を記入"></textarea>
      </div>
      <div className={styles.mainNotePrev}>
        <h1 className={styles.prevTitle}>タイトル</h1>
        <div className={styles.markdownPrev}>ノート内容</div>
      </div>
    </div>
  );
};

export default Main;
