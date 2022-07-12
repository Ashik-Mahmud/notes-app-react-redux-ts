import { useSelector } from "react-redux";
import styled from "styled-components";
import { state } from "../store/Reducers";
import { INotesAction } from "../type";
import NoteItem from "./NoteItem";

const NotesList = ({
  handleDeleteNotes,
  handleEditNotes,
}: {
  handleDeleteNotes: (id: number) => void;
  handleEditNotes: (note: INotesAction) => void;
}) => {
  const notes: INotesAction[] = useSelector((state: state) => state.Notes);

  return (
    <NoteListContainer>
      {notes.length === 0 && <h3>No Notes Found</h3>}
      <ul>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            handleDeleteNotes={handleDeleteNotes}
            handleEditNotes={handleEditNotes}
          />
        ))}
      </ul>
    </NoteListContainer>
  );
};

const NoteListContainer = styled.div`
  position: relative;
  margin: 1rem 0rem;
  h1 {
    margin: 1rem 0rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    li {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
      padding: 1rem;
      border-radius: 5px;
      background: #f8f8f8;
      p {
        font-size: 0.9rem;
        margin: 0.5rem 0rem;
      }
      .action {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
          background: #f8f8f8;
          border: none;
          outline: none;
          padding: 0.2rem;
          font-family: "Poppins", sans-serif;
          cursor: pointer;
          margin: 0.3rem;
        }
        button:first-child {
          background-color: #00acfa;
          color: #f8f8f8;
        }
      }
    }
  }
`;

export default NotesList;
