/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// Spacial Big O: O(1) Temporal Big O: O(n)
// @lc code=start
export function isPalindrome(s: string): boolean {
  if (s === " ") return true;

  let l = 0;
  let r = s.length - 1;
  const isLetter = /[a-zA-Z0-9]/;

  while (l < r) {
    if (!isLetter.test(s[l])) {
      l++;
    } else {
      if (!isLetter.test(s[r])) {
        r--;
      } else {
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
          return false;
        }
        l++;
        r--;
      }
    }
  }

  return true;
}
// @lc code=end
