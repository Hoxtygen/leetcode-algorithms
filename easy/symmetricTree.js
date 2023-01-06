/* 
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:

    The number of nodes in the tree is in the range [1, 1000].
    -100 <= Node.val <= 100

 
Follow up: Could you solve it both recursively and iteratively?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Iterative approach
function isSymmetric(root) {
  if (!root) return true;
  const stack1 = [],
    stack2 = [];
  let curr1 = root,
    curr2 = root;
  while ((curr1 && curr2) || (stack1.length && stack2.length)) {
    while (curr1) {
      stack1.push(curr1);
      curr1 = curr1.left;
    }
    while (curr2) {
      stack2.push(curr2);
      curr2 = curr2.right;
    }
    (curr1 = stack1.pop()), (curr2 = stack2.pop());
    if (curr1.val !== curr2.val || stack1.length !== stack2.length) {
      return false;
    }
    (curr1 = curr1.right), (curr2 = curr2.left);
  }
  return true;
}

// recursive approach
function isMirror(node1, node2) {
  if (node1 === null && node2 === null) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }
  if (node1.val !== node2.val) {
    return false;
  }
  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
}

function isSymmetric(root) {
  return root === null || isMirror(root.left, root.right);
}
