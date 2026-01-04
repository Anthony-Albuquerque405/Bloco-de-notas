import { useContext, useState } from "react";
import { BlocContext } from "../context/BlocContext";
import "../style/FormStyle.css";

const BlocForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { keyId, setKeyId, CreateNote } = useContext(BlocContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    CreateNote({
      id: setKeyId(keyId + 1),
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <section>
      <h1 className="form_title">Bloc Notes</h1>
      <form onSubmit={HandleSubmit} className="form">
        <input
          className="form_input"
          placeholder="write the title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          className="form_textarea"
          placeholder="write the description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <button className="form_button">Save</button>
      </form>
    </section>
  );
};

export default BlocForm;
