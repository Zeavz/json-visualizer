import JsonInputContainer from "./components/JsonInputContainer";
import VisualizerContainer from "./components/VisualizerContainer";
import styled from "@emotion/styled";

function App() {
  return (
    <StyledDiv>
      <JsonInputContainer />
      <VisualizerContainer />
    </StyledDiv>
  );
}

const StyledDiv = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export default App;
