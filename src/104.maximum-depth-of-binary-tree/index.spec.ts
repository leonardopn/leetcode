import { expect, test } from "vitest";
import { TreeNode, maxDepth } from "./index";

// Helper to build a tree from array (LeetCode style)
function buildTree(arr: (number | null)[]): TreeNode | null {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (node) {
      if (arr[i] !== null && arr[i] !== undefined) {
        node.left = new TreeNode(arr[i]);
        queue.push(node.left);
      }
      i++;
      if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
        node.right = new TreeNode(arr[i]);
        queue.push(node.right);
      }
      i++;
    }
  }
  return root;
}

test("maxDepth returns 3 for [3,9,20,null,null,15,7]", () => {
  const root = buildTree([3, 9, 20, null, null, 15, 7]);
  expect(maxDepth(root)).toBe(3);
});

test("maxDepth returns 2 for [1,null,2]", () => {
  const root = buildTree([1, null, 2]);
  expect(maxDepth(root)).toBe(2);
});

test("maxDepth returns 0 for empty tree", () => {
  expect(maxDepth(null)).toBe(0);
});

test("maxDepth returns 1 for single node", () => {
  const root = buildTree([42]);
  expect(maxDepth(root)).toBe(1);
});

test("maxDepth returns correct value for left-skewed tree", () => {
  const root = buildTree([1, 2, null, 3, null, 4]);
  expect(maxDepth(root)).toBe(4);
});

test("maxDepth returns correct value for right-skewed tree", () => {
  const root = buildTree([1, null, 2, null, 3, null, 4]);
  expect(maxDepth(root)).toBe(4);
});

test("maxDepth returns correct value for balanced tree", () => {
  const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
  expect(maxDepth(root)).toBe(3);
});
