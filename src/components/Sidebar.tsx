import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>ノート</h1>
        <button>追加</button>
      </div>
      <div className={styles.notes}>
        <div className={styles.note}>
          <div className={styles.title}>
            <strong>タイトル</strong>
            <button>削除</button>
          </div>
          <p>ノートの内容です</p>
          <small>最後の修正日: XX/XX</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
