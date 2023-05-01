/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const map = Array.from(Array(board.length), () =>
    Array(board[0].length).fill("X")
  );
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const notSurrounded = "O";
  const startPosition = [];
  for (let col = 0; col < board.length; col++) {
    startPosition.push([0, col]);
    startPosition.push([board[0].length - 1, col]);
  }
  for (let row = 0; row < board[0].length; row++) {
    startPosition.push([row, 0]);
    startPosition.push([row, board.length - 1]);
  }

  for (let j = 0; j < startPosition.length; j++) {
    const [startX, startY] = startPosition[j];
    if (board[startY][startX] === "O") {
      const queue = [[startX, startY]];
      map[startY][startX] = notSurrounded;
      while (queue.length) {
        const [currentX, currentY] = queue.pop();
        for (let d = 0; d < direction.length; d++) {
          const [x, y] = direction[d];
          const nextX = currentX + x;
          const nextY = currentY + y;
          if (
            nextX >= 0 &&
            nextX < board[0].length &&
            nextY >= 0 &&
            nextY < board.length &&
            board[nextY][nextX] === "O" &&
            map[nextY][nextX] === "X"
          ) {
            queue.unshift([nextX, nextY]);
            map[nextY][nextX] = notSurrounded;
          }
        }
      }
    }
  }
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[j][i] = map[j][i];
    }
  }
};

console.log("answer: ", [
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
]);

solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
]);

console.log("answer - ex2", [["X"]]);

solve([["X"]]);

console.log("answer-ex3", [
  [
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ],
]);

solve([
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
]);

console.log("ans - ex4", [
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
]);

solve([
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
]);
