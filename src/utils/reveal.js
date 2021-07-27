import { COL_SIZE, ROW_SIZE } from "../constants";

export const onReveal = (x, y, grid) => {
  if (
    x === -1 ||
    y === -1 ||
    x === ROW_SIZE ||
    y === COL_SIZE ||
    grid[x][y].revealed
  ) {
    return grid;
  }

  grid[x][y].revealed = true;

  if (grid[x][y].value === 0) {
    grid = onReveal(x - 1, y, grid);
    grid = onReveal(x, y + 1, grid);
    grid = onReveal(x + 1, y, grid);
    grid = onReveal(x, y - 1, grid);
  }
  return grid;
};
