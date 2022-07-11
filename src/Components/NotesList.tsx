import styled from "styled-components";
import NoteItem from "./NoteItem";

const NotesList = () => {
  return (
    <NoteListContainer>
      <ul>
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
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
      p {
        font-size: 0.9rem;
        margin: 0.5rem 0rem;
      }
      .action {
        position: relative;
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
