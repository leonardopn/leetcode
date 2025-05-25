/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// O(n²) - Solutions can be improved using hash map
function badSolution(nums: number[], target: number): number[] {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    for (let index2 = 0; index2 < nums.length; index2++) {
      const element2 = nums[index2];

      if (index !== index2 && element + element2 === target) {
        return [index, index2];
      }
    }
  }

  return [];
}

// This alternative use O(n), because you can use a hashmap to keep the complementary result and iterate the array one single time search if the current element is a complementary of a know result.
// @lc code=start
export function twoSum(nums: number[], target: number): number[] {
  const possibleRests = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    const rest = possibleRests.get(target - element);

    if (rest !== undefined) {
      return [index, rest];
    }

    possibleRests.set(element, index);
  }

  return [];
}
// @lc code=end

export default twoSum;
