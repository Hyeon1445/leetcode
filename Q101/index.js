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
 * @param {TreeNode | null} leftChild
 * @param {TreeNode | null} rightChild
 * @return {boolean}
 */
const isSymmetricChildren = (leftChild, rightChild) => {
  if (!leftChild && !rightChild) return true;
  if (!leftChild || !rightChild) return false;
  return (
    leftChild.val === rightChild.val &&
    isSymmetricChildren(leftChild.left, rightChild.right) &&
    isSymmetricChildren(leftChild.right, rightChild.left)
  );
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return isSymmetricChildren(root.left, root.right);
};

console.log(isSymmetric(convertArrayToTreeNode([1, 2, 2, 3, 4, 4, 3])));
console.log(isSymmetric(convertArrayToTreeNode([1, 2, 2, null, 3, null, 3])));
