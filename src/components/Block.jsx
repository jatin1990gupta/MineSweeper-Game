import React from "react";
import styled from "styled-components";

const BlockComponent = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  cursor: pointer;
  background-color: #efefef;
`;

const RevealedComponent = styled(BlockComponent)`
  border: 1px solid #525252;
  background-color: #b7b7b7;
`;

const FlaggedComponent = styled(BlockComponent)`
  color: red;
  font-size: 1.4rem;
`;

function Block({ details, addFlag, removeFlag, revealCell }) {
  const { value, revealed, flag, i, j } = details;

  const CellComponent = () => {
    if (revealed) {
      return (
        <RevealedComponent onContextMenu={(e) => e.preventDefault()}>
          {value === 0 ? "" : value}
        </RevealedComponent>
      );
    }
    if (flag) {
      return (
        <FlaggedComponent
          onClick={() => revealCell(i, j)}
          onContextMenu={(e) => removeFlag(e, i, j)}
        >
          ℙ
        </FlaggedComponent>
      );
    }
    return (
      <BlockComponent
        onClick={() => revealCell(i, j)}
        onContextMenu={(e) => addFlag(e, i, j)}
      />
    );
  };

  return <CellComponent />;
}

export default Block;
