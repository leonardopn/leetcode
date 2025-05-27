/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
export function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  let islands = 0;
  const processed = new Set();
  const maxRows = grid.length;
  const maxColumns = grid[0].length;

  function dfs(r: number, c: number) {
    if (
      processed.has(`${r},${c}`) ||
      r >= maxRows ||
      c >= maxColumns ||
      r < 0 ||
      c < 0 ||
      grid[r][c] === "0"
    ) {
      return;
    }

    processed.add(`${r},${c}`);

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxColumns; c++) {
      if (!processed.has(`${r},${c}`) && grid[r][c] === "1") {
        dfs(r, c);
        islands++;
      }
    }
  }

  return islands;
}
// @lc code=end
