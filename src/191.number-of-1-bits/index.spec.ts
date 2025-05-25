import { expect, test } from "vitest";
import { hammingWeight } from "./index";

// Example 1: Input: 11 (binary 1011, 3 ones)
test("hammingWeight returns 3 for input 11 (binary 1011)", () => {
  expect(hammingWeight(11)).toBe(3);
});

// Example 2: Input: 128 (binary 10000000, 1 one)
test("hammingWeight returns 1 for input 128 (binary 10000000)", () => {
  expect(hammingWeight(128)).toBe(1);
});

// Example 3: Input: 2147483645 (binary 1111111111111111111111111111101, 30 ones)
test("hammingWeight returns 30 for input 2147483645", () => {
  expect(hammingWeight(2147483645)).toBe(30);
});

// All bits zero
test("hammingWeight returns 0 for 0", () => {
  expect(hammingWeight(0)).toBe(0);
});

// Single bit set at different positions
test("hammingWeight returns 1 for 1", () => {
  expect(hammingWeight(1)).toBe(1);
});
