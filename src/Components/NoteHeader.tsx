import styled from "styled-components";

const NoteHeader = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <NoteHeaderContainer>
      <h1>Notes List</h1>
      <button onClick={() => setShow(true)}>Add New Notes +</button>
    </NoteHeaderContainer>
  );
};
const NoteHeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f8f8;
  padding: 1rem;
  flex-wrap: wrap;
  border-radius: 5px;
  margin: 1rem 0rem;
  button {
    background: #00acfa;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: #f8f8f8;
    padding: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;
export default NoteHeader;
