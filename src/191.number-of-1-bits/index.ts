/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

//Other solution by me
export function hammingWeight2(n: number): number {
  const binary = (n >>> 0).toString(2);

  let count = 0;

  binary.split("").forEach((item) => {
    if (item === "1") count += 1;
  });

  return count;
}

// @lc code=start
export function hammingWeight(n: number): number {
  let count = 0;

  while (n) {
    count += n & 1;
    n = n >> 1;
  }

  return count;
}
// @lc code=end
