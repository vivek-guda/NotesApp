import "./Main.css";
import { useEffect } from "react";
import { useApp } from "../../context-providers/app-context";
import Card from "../Card/Card";

function Main() {
  const {
    isPinned,
    setIsPinned,
    inputFocused,
    setInputFocused,
    title,
    setTitle,
    text,
    setText,
    otherNotes,
    setOtherNotes,
    pinnedNotes,
    setPinnedNotes,
  } = useApp();

  useEffect(() => {
    setOtherNotes(JSON.parse(localStorage.getItem("otherNotes")));
    setPinnedNotes(JSON.parse(localStorage.getItem("pinnedNotes")));
  }, []);

  useEffect(() => {
    localStorage.setItem("otherNotes", JSON.stringify(otherNotes));
    localStorage.setItem("pinnedNotes", JSON.stringify(pinnedNotes));
  }, [otherNotes, pinnedNotes]);

  const newNote = {
    id: new Date().toLocaleString(),
    title,
    text,
    isPinned,
  };

  const resetInput = () => {
    setIsPinned(false);
    setInputFocused(false);
    setTitle("");
    setText("");
  };

  const addNote = () => {
    if (title !== "" && text !== "") {
      if (isPinned === true) {
        setPinnedNotes([...pinnedNotes, newNote]);
      } else {
        setOtherNotes([...otherNotes, newNote]);
      }
      setIsPinned(false);
      setInputFocused(false);
      setTitle("");
      setText("");
    } else {
      alert("Please fill both Title and Text to add a new note");
    }
  };

  return (
    <main className="main">
      <div className="input-container">
        <div className="input-textarea">
          <textarea
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="Take a note..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />

          <button
            className="transparent-round-btn pin-btn"
            onClick={() => {
              setIsPinned(!isPinned);
            }}
          >
            {isPinned ? (
              <span className="material-icons-outlined">push_pin</span>
            ) : (
              <span className="material-icons">push_pin</span>
            )}
          </button>
        </div>
        <div className="input-btn-container">
          <button className="danger-btn" onClick={resetInput}>
            Reset
          </button>
          <button onClick={addNote}>Add Note</button>
        </div>
      </div>

      <section className="notes-section">
        {pinnedNotes.length > 0 && (
          <h3 className="notes-section-heading">Pinned</h3>
        )}
        <div className="notes-conatiner">
          {pinnedNotes.map((note) => (
            <Card key={note.id} noteDetails={note} />
          ))}
        </div>
      </section>
      <section className="notes-section">
        {otherNotes.length > 0 && pinnedNotes.length > 0 && (
          <h3 className="notes-section-heading">Others</h3>
        )}
        <div className="notes-conatiner">
          {otherNotes.map((note) => (
            <Card key={note.id} noteDetails={note} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
