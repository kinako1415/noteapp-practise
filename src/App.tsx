import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

type newNoteType = {
  id: string;
  title: string;
  content: string;
  modDate: number;
};

function App() {
  const [notes, setNotes] = useState<newNoteType[]>([]);
  const [activeNote, setActiveNote] = useState("not");

  const onAddNote = () => {
    console.log("ノートが新しく作成されました。");
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id: string) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
}

export default App;
