import React from "react";
import styled from "styled-components";
import "./App.css";
import Board from "./components/Board";

const Heading = styled.h1`
  margin: 40px;
  color: #494949;
  text-decoration: underline;
`;

function App() {
  return (
    <div className="App">
      <Heading>MineSweeper Game</Heading>
      <Board />
    </div>
  );
}

export default App;
