/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// Espacial Big O: O(1); Temporal Big O: O(n) -> This approach use more memory than necessary.
export function rob2(nums: number[]): number {
  let maxHouses = 0;
  const realHouseValues: number[] = [];

  // I have two options
  // Current House + two houses before
  // or
  // One house before

  nums.forEach((house, index) => {
    const currentHousePlusTwoHousesBefore =
      house + (realHouseValues[index - 2] || 0);
    const oneHouseBefore = realHouseValues[index - 1] || 0;

    const bestCurrentHouseValue = Math.max(
      currentHousePlusTwoHousesBefore,
      oneHouseBefore
    );

    realHouseValues[index] = bestCurrentHouseValue;

    if (maxHouses <= bestCurrentHouseValue) {
      maxHouses = bestCurrentHouseValue;
    }
  });

  return maxHouses;
}

// @lc code=start
// Espacial Big O: O(1); Temporal Big O: O(n) -> This approach use less memory, because it's not necessary keep an array with each real house value
export function rob(nums: number[]): number {
  let one_before = 0;
  let two_before = 0;

  for (const house of nums) {
    const current_value = Math.max(house + two_before, one_before);
    two_before = one_before;
    one_before = current_value;
  }

  return one_before;
}
// @lc code=end
