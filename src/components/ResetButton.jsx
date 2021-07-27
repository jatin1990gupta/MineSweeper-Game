import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  color: #494949;
  margin: 20px;
`;

const ActiveButton = styled(Button)`
  color: white;
  background-color: #da3a3a;
`;

function ResetButton({ isGameEnabled, handleClick }) {
  return isGameEnabled ? (
    <Button onClick={() => handleClick()}>Reset Game</Button>
  ) : (
    <ActiveButton onClick={() => handleClick()}>Reset Game</ActiveButton>
  );
}

export default ResetButton;
