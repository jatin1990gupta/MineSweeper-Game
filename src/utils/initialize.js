import { COL_SIZE, MINE_COUNT, ROW_SIZE } from "../constants";

export const newBoard = () => {
  let grid = [];

  for (let i = 0; i < ROW_SIZE; i++) {
    let blocks = [];
    for (let j = 0; j < COL_SIZE; j++) {
      blocks.push({
        value: 0,
        revealed: false,
        i,
        j,
        flag: false,
      });
    }
    grid.push(blocks);
  }

  let bombsCount = 0;
  while (bombsCount < MINE_COUNT) {
    let x = Math.floor(Math.random() * ROW_SIZE);
    let y = Math.floor(Math.random() * COL_SIZE);

    if (grid[x][y].value === 0) {
      grid[x][y].value = "X";
      bombsCount++;
    }
  }

  // Add Numbers
  for (let i = 0; i < ROW_SIZE; i++) {
    for (let j = 0; j < COL_SIZE; j++) {
      if (grid[i][j].value === "X") {
        continue;
      }

      // Top
      if (i > 0 && grid[i - 1][j].value === "X") {
        grid[i][j].value++;
      }

      // Top Right
      if (i > 0 && j < COL_SIZE - 1 && grid[i - 1][j + 1].value === "X") {
        grid[i][j].value++;
      }

      // Right
      if (j < COL_SIZE - 1 && grid[i][j + 1].value === "X") {
        grid[i][j].value++;
      }

      // Botoom Right
      if (
        i < ROW_SIZE - 1 &&
        j < COL_SIZE - 1 &&
        grid[i + 1][j + 1].value === "X"
      ) {
        grid[i][j].value++;
      }

      // Bottom
      if (i < ROW_SIZE - 1 && grid[i + 1][j].value === "X") {
        grid[i][j].value++;
      }

      // Bottom Left
      if (i < ROW_SIZE - 1 && j > 0 && grid[i + 1][j - 1].value === "X") {
        grid[i][j].value++;
      }

      // LEft
      if (j > 0 && grid[i][j - 1].value === "X") {
        grid[i][j].value++;
      }

      // Top Left
      if (i > 0 && j > 0 && grid[i - 1][j - 1].value === "X") {
        grid[i][j].value++;
      }
    }
  }
  return grid;
};
