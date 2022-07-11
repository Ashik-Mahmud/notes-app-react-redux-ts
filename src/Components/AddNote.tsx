import styled from "styled-components";

const AddNote = () => {
  return (
    <AddNoteContainer>
      <h1>Add Note</h1>
      <form>
        <div className="input-group">
          <label htmlFor="note-title">Title</label>
          <input type="text" id="note-title" placeholder="Title" />
        </div>
        <div className="input-group">
          <label htmlFor="note-description">Descriptions</label>
          <textarea
            name="description"
            id="description"
            rows={3}
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
  position: relative;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: min(500px, 100% - 2rem);
  border-radius: 10px;
  margin: 2rem auto;
  form {
    display: flex;
    flex-direction: column;
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
  }
`;

export default AddNote;
