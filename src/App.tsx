import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

type newNoteType = {
  id: number;
  title: string;
  content: string;
  modDate: number;
};

function App() {
  const [notes, setNotes] = useState<newNoteType[]>([]);

  const onAddNote = () => {
    console.log("ノートが新しく作成されました。");
    const newNote = {
      id: 1,
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
