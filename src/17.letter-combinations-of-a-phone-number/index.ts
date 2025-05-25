/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
export function letterCombinations(digits: string): string[] {
  const digitMap: { [key: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  if (digits === "") return [];

  const result: string[] = [];

  function backTracking(permutation: string, digits: string) {
    if (!digits) {
      result.push(permutation);
      return;
    }

    for (const letter of digitMap[digits[0]]) {
      backTracking(permutation + letter, digits.slice(1));
    }
  }

  backTracking("", digits);

  return result;
}
// @lc code=end
