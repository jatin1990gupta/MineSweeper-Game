import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MINE_COUNT } from "../constants";
import { onReveal, onLose } from "../utils";
import { newBoard } from "../utils/initialize";
import Block from "./Block";
import ResetButton from "./ResetButton";

const BoardContainer = styled.div`
  margin: 40px auto;
  border: 1px solid gray;
  width: fit-content;
`;

const DisabledBoardContainer = styled(BoardContainer)`
  pointer-events: none;
  opacity: 50%;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading2 = styled.h4`
  color: #494949;
`;

function Board() {
  const [grid, setGrid] = useState([]);
  const [flagCount, setFlagCount] = useState(0);
  const [gameEnabled, setGameEnabled] = useState(true);

  useEffect(() => {
    setGrid(newBoard());
  }, []);

  const resetGame = () => {
    setGrid(newBoard());
  };

  const addFlag = (e, x, y) => {
    e.preventDefault();
    if (flagCount < MINE_COUNT) {
      let newGrid = [...grid];
      newGrid[x][y].flag = true;
      setFlagCount((prev) => prev + 1);
      setGrid(newGrid);
    }
  };

  const removeFlag = (e, x, y) => {
    e.preventDefault();
    let newGrid = [...grid];
    newGrid[x][y].flag = false;
    setFlagCount((prev) => prev - 1);
    setGrid(newGrid);
  };

  const revealCell = (x, y) => {
    let newGrid = [...grid];

    if (newGrid[x][y].flag) setFlagCount((prev) => prev - 1);

    if (newGrid[x][y].value === "X") {
      setGrid(onLose(newGrid));
      setGameEnabled(false);
    } else {
      setGrid(onReveal(x, y, newGrid));
    }
  };

  const BoardEntries = grid.map((rowArr, index) => {
    return (
      <RowContainer key={index}>
        {rowArr.map((rowElem, idx) => {
          return (
            <Block
              details={rowElem}
              addFlag={addFlag}
              removeFlag={removeFlag}
              revealCell={revealCell}
              key={idx}
            />
          );
        })}
      </RowContainer>
    );
  });

  return (
    <>
      <Heading2>Mines Left: {MINE_COUNT - flagCount}</Heading2>
      {gameEnabled ? (
        <BoardContainer>{BoardEntries}</BoardContainer>
      ) : (
        <>
          <DisabledBoardContainer>{BoardEntries}</DisabledBoardContainer>
          <Heading2>(Game Over)</Heading2>
        </>
      )}
      <ResetButton
        isGameEnabled={gameEnabled}
        handleClick={() => {
          resetGame();
          setGameEnabled(true);
        }}
      />
    </>
  );
}

export default Board;
