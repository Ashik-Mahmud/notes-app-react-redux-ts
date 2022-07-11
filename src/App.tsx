import styled from "styled-components";

function App() {
  return (
    <AppContainer className="App">
      <h1>Hello World</h1>
    </AppContainer>
  );
}

const AppContainer = styled.section`
  position: relative;
  max-width: min(1250px, 100% - 2rem);
  margin-inline: auto;
`;
export default App;
