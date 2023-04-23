// Q102. Binary Tree Level Order Traversal
// bfs

const { convertArrayToTreeNode, TreeNode } = require("../utils");

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const answer = [];
  if (!root) return answer;
  const queue = [root];
  while (queue.length) {
    const array = [];
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const currentNode = queue.pop();
      if (currentNode.val !== null) array.push(currentNode.val);
      if (currentNode.left !== null) queue.unshift(currentNode.left);
      if (currentNode.right !== null) queue.unshift(currentNode.right);
    }
    answer.push(array);
  }
  return answer;
};

console.log(levelOrder(convertArrayToTreeNode([3, 9, 20, null, null, 15, 7])));
console.log("answer1: ", [[3], [9, 20], [15, 7]]);

console.log(levelOrder(convertArrayToTreeNode([1])));
console.log("answer2: ", [[1]]);

console.log(levelOrder(convertArrayToTreeNode([])));
console.log("answer3: ", []);
