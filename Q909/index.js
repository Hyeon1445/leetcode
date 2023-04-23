// Q909. Snakes and Ladders
// bfs

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const length = board.length;
  const map = [];
  for (let col = 0; col < length; col++) {
    for (let row = 0; row < length; row++) {
      if (col % 2 === 0) {
        map.push(board[length - 1 - col][row]);
      } else {
        map.push(board[length - 1 - col][length - 1 - row]);
      }
    }
  }
  const notVisited = -1;
  const visited = Array(length * length).fill(notVisited);
  const startIndex = 0;
  const endIndex = length * length - 1;
  const queue = [startIndex];
  visited[startIndex] = 0;
  while (queue.length) {
    const current = queue.pop();
    for (let dice = 1; dice <= 6; dice++) {
      const nextPosition =
        map[current + dice] === -1 ? current + dice : map[current + dice] - 1;
      if (current + dice > endIndex || visited[nextPosition] !== notVisited)
        continue;
      queue.unshift(nextPosition);
      visited[nextPosition] = visited[current] + 1;
    }
  }
  return visited[endIndex];
};

console.log(
  "answer: 4",
  snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ])
);

console.log(
  "answer: 1",
  snakesAndLadders([
    [-1, -1],
    [-1, 3],
  ])
);

console.log(
  "answer: 4",
  snakesAndLadders([
    [-1, -1, -1, 46, 47, -1, -1, -1],
    [51, -1, -1, 63, -1, 31, 21, -1],
    [-1, -1, 26, -1, -1, 38, -1, -1],
    [-1, -1, 11, -1, 14, 23, 56, 57],
    [11, -1, -1, -1, 49, 36, -1, 48],
    [-1, -1, -1, 33, 56, -1, 57, 21],
    [-1, -1, -1, -1, -1, -1, 2, -1],
    [-1, -1, -1, 8, 3, -1, 6, 56],
  ])
);
