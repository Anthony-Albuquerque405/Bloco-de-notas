import { createContext, useEffect, useState } from "react";
import { Notes as data } from "../data/Notes";

export const BlocContext = createContext();

function BlocContextProvide(props) {
  const [notes, setNotes] = useState([]);
  const [keyId, setKeyId] = useState(0);

  const CreateNote = (note) => {
    setNotes([
      ...notes,
      {
        id: keyId,
        title: note.title,
        description: note.description,
      },
    ]);
  };

  useEffect(() => {
    setNotes(data);
  }, []);

  const DeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <BlocContext.Provider
      value={{
        keyId,
        setKeyId,
        notes,
        DeleteNote,
        CreateNote,
      }}
    >
      {props.children}
    </BlocContext.Provider>
  );
}

export default BlocContextProvide;
