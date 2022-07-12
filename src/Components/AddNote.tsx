import styled from "styled-components";
import { IAddNote } from "../type";
import { editProps } from "./NoteContainer";

type Props = {
  formData: IAddNote;
  setFormData: React.Dispatch<React.SetStateAction<IAddNote>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isEdit: editProps;
};

const AddNote = ({
  setShow,
  formData,
  setFormData,
  handleChange,
  handleSubmit,
  isEdit,
}: Props) => {
  return (
    <AddNoteContainer id="note-container">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={() => setShow(false)}>
          &times;
        </div>
        <h1>{isEdit.updateForm ? "Update Note" : "Add Note"}</h1>
        <div className="input-group">
          <label htmlFor="note-title">Title</label>
          <input
            type="text"
            id="note-title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="input-group">
          <label htmlFor="note-description">Descriptions</label>
          <textarea
            name="description"
            id="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Write Down Note Description"
          ></textarea>
        </div>
        <div className="button">
          <button>Add New Note</button>
        </div>
      </form>
    </AddNoteContainer>
  );
};

const AddNoteContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  backdrop-filter: blur(2px);

  form {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    max-width: min(500px, 100% - 2rem);
    border-radius: 10px;
    position: relative;
    margin: 2rem auto;
    background: #f8f8f8;
    gap: 1rem;
    input,
    textarea {
      border: 1px solid #ccc;
      padding: 0.9rem;
      font-family: "Poppins", sans-serif;
      width: 100%;
      margin: 0.3rem 0rem;
      border-radius: 6px;
      font-size: 1rem;
    }
    button {
      padding: 1rem;
      width: 100%;
      background: #00acfa;
      font-family: "poppins";
      font-size: 1rem;
      color: #fff;
      border: none;
      border-radius: 6px;
      outline: none;
      cursor: pointer;
    }
    .close-btn {
      position: absolute;
      right: 14px;
      top: 10px;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

export default AddNote;
