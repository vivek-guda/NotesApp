import "./Card.css";
import { useApp } from "../../context-providers/app-context";

function Card({ noteDetails }) {
  const { otherNotes, setOtherNotes, pinnedNotes, setPinnedNotes } = useApp();

  const deleteNote = () => {
    if (noteDetails.isPinned === true) {
      setPinnedNotes(pinnedNotes.filter((note) => note.id !== noteDetails.id));
    } else {
      setOtherNotes(otherNotes.filter((note) => note.id !== noteDetails.id));
    }
  };

  const togglePin = () => {
    if (noteDetails.isPinned == true) {
      setPinnedNotes(pinnedNotes.filter((note) => note.id !== noteDetails.id));
      setOtherNotes([{ ...noteDetails, isPinned: false }, ...otherNotes]);
    } else {
      setOtherNotes(otherNotes.filter((note) => note.id !== noteDetails.id));
      setPinnedNotes([{ ...noteDetails, isPinned: true }, ...pinnedNotes]);
    }
  };

  return (
    <div className="note-card">
      <div className="card-content">
        <h3 className="note-title">{noteDetails.title}</h3>
        <p className="note-text">{noteDetails.text}</p>
      </div>
      <div className="card-btn-container">
        <button className="transparent-round-btn" onClick={togglePin}>
          {noteDetails.isPinned ? (
            <span className="material-icons-outlined">push_pin</span>
          ) : (
            <span className="material-icons">push_pin</span>
          )}
        </button>
        <button className="transparent-round-btn" onClick={deleteNote}>
          <i className="material-icons-outlined danger-btn">delete</i>
        </button>
      </div>
    </div>
  );
}

export default Card;
