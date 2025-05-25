import { expect, test } from "vitest";
import twoSums from "./index";

test("twoSum basic cases", () => {
  expect(twoSums([3, 2, 4], 6)).toStrictEqual([2, 1]);
  expect(twoSums([2, 7, 11, 15], 9)).toStrictEqual([1, 0]);
  expect(twoSums([3, 3], 6)).toStrictEqual([1, 0]);
});

test("twoSum with negative numbers", () => {
  expect(twoSums([-1, -2, -3, -4, -5], -8)).toStrictEqual([4, 2]);
  expect(twoSums([1, -2, 3, 4], 2)).toStrictEqual([3, 1]);
});

test("twoSum with zeroes", () => {
  expect(twoSums([0, 4, 3, 0], 0)).toStrictEqual([3, 0]);
  expect(twoSums([0, 0], 0)).toStrictEqual([1, 0]);
});

test("twoSum with no solution", () => {
  expect(twoSums([1, 2, 3], 7)).toStrictEqual([]);
  expect(twoSums([], 0)).toStrictEqual([]);
  expect(twoSums([1], 1)).toStrictEqual([]);
});

test("twoSum with large numbers", () => {
  expect(twoSums([1000000, 500000, 1500000], 2000000)).toStrictEqual([2, 1]);
});

test("twoSum with target as sum of first and last", () => {
  expect(twoSums([4, 2, 7, 11, 15], 19)).toStrictEqual([4, 0]);
});
