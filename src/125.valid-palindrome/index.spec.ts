import { describe, it, expect } from "vitest";
import { isPalindrome } from "./index";

describe("isPalindrome", () => {
  it('should return true for "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it('should return false for "race a car"', () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  it('should return true for " "', () => {
    expect(isPalindrome(" ")).toBe(true);
  });

  it('should return true for "0P0"', () => {
    expect(isPalindrome("0P0")).toBe(true);
  });

  it('should return true for "P0" or "0P"', () => {
    expect(isPalindrome("P0")).toBe(false);
    expect(isPalindrome("0P")).toBe(false);
  });

  it('should return false for "ab"', () => {
    expect(isPalindrome("ab")).toBe(false);
  });

  it('should return true for "a."', () => {
    expect(isPalindrome("a.")).toBe(true);
  });

  it('should return true for ".,!"', () => {
    expect(isPalindrome(".,!")).toBe(true);
  });

  it('should return true for "Able was I ere I saw Elba"', () => {
    expect(isPalindrome("Able was I ere I saw Elba")).toBe(true);
  });

  it('should return false for "palindrome"', () => {
    expect(isPalindrome("palindrome")).toBe(false);
  });

  it('should return true for "12321"', () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  it('should return false for "1231"', () => {
    expect(isPalindrome("1231")).toBe(false);
  });

  it('should return true for "No lemon, no melon"', () => {
    expect(isPalindrome("No lemon, no melon")).toBe(true);
  });
});
