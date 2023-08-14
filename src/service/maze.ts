export const DIRECTION = {
  TOP: 2,
  RIGHT: 4,
  BOTTOM: 8,
  LEFT: 16
}

function opposite(direction: number) {
  switch (direction) {
    case DIRECTION.TOP: {
      return DIRECTION.BOTTOM;
    }
    case DIRECTION.RIGHT: {
      return DIRECTION.LEFT;
    }
    case DIRECTION.BOTTOM: {
      return DIRECTION.TOP;
    };
    case DIRECTION.LEFT: {
      return DIRECTION.RIGHT;
    }
    default: {
      return DIRECTION.RIGHT;
    }
  };
}


function path(grid: number[][], fromX: number, fromY: number, toX: number, toY: number, direction: number) {
  grid[fromY][fromX] |= direction;
  grid[toY][toX] |= opposite(direction);

  // Carve a path from the new cell.
  carve(grid, toX, toY);
}

function carve(grid: number[][], x: number, y: number) {
  // Carve a path from x,y to an adjacent cell
  if (grid.length === 0) {
    return;
  }
  // First, try each direction (in random order)
  var directions = [0, 1, 2, 3];

  // Fisher-Yates shuffle for directions array
  for (let i = directions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [directions[i], directions[j]] = [directions[j], directions[i]];
  }

  directions.forEach(function (direction) {
    if (direction === 0 && y - 1 >= 0 && grid[y - 1][x] === 0) {
      // Top.
      path(grid,x, y, x, y - 1, DIRECTION.TOP);
    }
    else if (direction === 1 && x + 1 < grid[0].length && grid[y][x + 1] === 0) {
      // Right.
      path(grid,x, y, x + 1, y, DIRECTION.RIGHT);
    }
    else if (direction === 2 && y + 1 < grid.length && grid[y + 1][x] === 0) {
      // Bottom.
      path(grid,x, y, x, y + 1, DIRECTION.BOTTOM);
    }
    else if (direction === 3 && x - 1 >= 0 && grid[y][x - 1] === 0) {
      // Left.
      path(grid, x, y, x - 1, y, DIRECTION.LEFT);
    }
  });
}

export function initialize(width: number, height: number) {
  const grid: number[][] = [];

  // set cells to 0.
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      grid[y] = grid[y] || [];
      grid[y][x] = 0;
    }
  }

  carve(grid,0, 0);
  return grid
}