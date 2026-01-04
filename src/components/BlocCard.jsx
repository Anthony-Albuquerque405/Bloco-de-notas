import { useContext } from "react";
import { BlocContext } from "../context/BlocContext";
import "../style/CardStyle.css";

const BlocCard = ({ note }) => {
  const { DeleteNote } = useContext(BlocContext);

  return (
    <section className="note">
      <div className="div_note">
        <p className="note_id">Id: {note.id}</p>
        <h1 className="note_title">{note.title}</h1>
        <p className="note_description">{note.description}</p>
      </div>
      <div className="div_button">
        <button className="delete_button" onClick={() => DeleteNote(note.id)}>
          Delete Note
        </button>
      </div>
    </section>
  );
};

export default BlocCard;
