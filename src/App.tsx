import styled from "styled-components";
import NoteContainer from "./Components/NoteContainer";

function App() {
  return (
    <AppContainer className="App">
      <NoteContainer />
    </AppContainer>
  );
}

const AppContainer = styled.section`
  position: relative;
  max-width: min(1250px, 100% - 2rem);
  margin-inline: auto;
`;
export default App;
