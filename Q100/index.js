// Q100. Same Tree
// dfs

const { TreeNode, convertArrayToTreeNode } = require("../utils");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

console.log(
  "output: true",
  isSameTree(
    convertArrayToTreeNode([1, 2, 3]),
    convertArrayToTreeNode([1, 2, 3])
  )
);

console.log(
  "Output: false",
  isSameTree(
    convertArrayToTreeNode([1, 2]),
    convertArrayToTreeNode([1, null, 3])
  )
);

console.log(
  "Output: false",
  isSameTree(
    convertArrayToTreeNode([1, 2, 1]),
    convertArrayToTreeNode([1, 1, 2])
  )
);
