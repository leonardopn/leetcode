/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Espacial Big O: O(n); Temporal Big O: O(n)
// @lc code=start
export function maxDepth(root: TreeNode | null): number {
  function dfs(root: TreeNode | null, depth: number): number {
    if (!root) return depth;

    const maxLeft = dfs(root.left, depth + 1);
    const masRight = dfs(root.right, depth + 1);

    return Math.max(maxLeft, masRight);
  }

  return dfs(root, 0);
}
// @lc code=end
