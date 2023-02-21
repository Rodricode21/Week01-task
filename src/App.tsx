import styled from "styled-components";
import Users from "./components/user/Users";
import "./App.css";

const AppWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App(): JSX.Element {
  return (
    <AppWrapper>
      <Users />
    </AppWrapper>
  );
}

export default App;
