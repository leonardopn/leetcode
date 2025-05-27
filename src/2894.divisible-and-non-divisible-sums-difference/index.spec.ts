import { describe, it, expect } from "vitest";
import { differenceOfSums } from "./index";

describe("differenceOfSums", () => {
  it("Example 1: n = 10, m = 3", () => {
    // Not divisible by 3: [1,2,4,5,7,8,10] sum=37
    // Divisible by 3: [3,6,9] sum=18
    expect(differenceOfSums(10, 3)).toBe(19);
  });

  it("Example 2: n = 5, m = 6", () => {
    // Not divisible by 6: [1,2,3,4,5] sum=15
    // Divisible by 6: [] sum=0
    expect(differenceOfSums(5, 6)).toBe(15);
  });

  it("Example 3: n = 5, m = 1", () => {
    // Not divisible by 1: [] sum=0
    // Divisible by 1: [1,2,3,4,5] sum=15
    expect(differenceOfSums(5, 1)).toBe(-15);
  });

  it("Edge case: n = 1, m = 1", () => {
    // Not divisible by 1: [] sum=0
    // Divisible by 1: [1] sum=1
    expect(differenceOfSums(1, 1)).toBe(-1);
  });

  it("Edge case: n = 1, m = 2", () => {
    // Not divisible by 2: [1] sum=1
    // Divisible by 2: [] sum=0
    expect(differenceOfSums(1, 2)).toBe(1);
  });

  it("All numbers divisible: n = 6, m = 1", () => {
    // Not divisible by 1: [] sum=0
    // Divisible by 1: [1,2,3,4,5,6] sum=21
    expect(differenceOfSums(6, 1)).toBe(-21);
  });

  it("No numbers divisible: n = 4, m = 5", () => {
    // Not divisible by 5: [1,2,3,4] sum=10
    // Divisible by 5: [] sum=0
    expect(differenceOfSums(4, 5)).toBe(10);
  });

  it("All numbers divisible: n = 3, m = 3", () => {
    // Not divisible by 3: [1,2] sum=3
    // Divisible by 3: [3] sum=3
    expect(differenceOfSums(3, 3)).toBe(0);
  });

  it("Large input: n = 1000, m = 2", () => {
    // Odd numbers sum - even numbers sum
    // Odd: 1+3+...+999 = 250000
    // Even: 2+4+...+1000 = 250500
    expect(differenceOfSums(1000, 2)).toBe(-500);
  });
});
