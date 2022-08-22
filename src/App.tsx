import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import styled from "styled-components";
const Container = styled.div`
  border-radius: 5px;
  width: 100%;
  margin: 0 auto;
`;
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
};

export default App;
