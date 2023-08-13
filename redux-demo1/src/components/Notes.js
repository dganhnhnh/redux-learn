import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? "important" : ""}</strong>
    </li>
  );
};

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  // read the current value of the filter from the store
  const filter = useSelector((state) => state.filter);
  let notesToShow;
  switch (filter) {
    case "IMPORTANT":
       notesToShow = notes.filter((note) => note.important); break;
    case "NONIMPORTANT":
       notesToShow = notes.filter((note) => !note.important); break;
    default:
        notesToShow = notes; break;
  }

  return (
    <ul>
      {notesToShow.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
};

export default Notes;
