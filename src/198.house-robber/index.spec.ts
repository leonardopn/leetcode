import { expect, test } from "vitest";
import { rob } from "./index";

test("Example 1: [1,2,3,1]", () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
});

test("Example 2: [2,7,9,3,1]", () => {
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
});

test("Single house", () => {
  expect(rob([5])).toBe(5);
});

test("Two houses", () => {
  expect(rob([2, 3])).toBe(3);
});

test("All zeros", () => {
  expect(rob([0, 0, 0, 0])).toBe(0);
});

test("Alternating high and low", () => {
  expect(rob([10, 1, 10, 1, 10])).toBe(30);
});

test("Three houses", () => {
  expect(rob([2, 1, 1])).toBe(3);
});

test("Increasing values", () => {
  expect(rob([1, 2, 3, 4, 5])).toBe(9);
});

test("Decreasing values", () => {
  expect(rob([5, 4, 3, 2, 1])).toBe(9);
});

test("Large input", () => {
  const arr = Array(100).fill(1);
  expect(rob(arr)).toBe(50);
});

test("Max value house", () => {
  expect(rob([400, 1, 400])).toBe(800);
});

test("Killer value house", () => {
  expect(rob([10, 0, 10, 0, 10, 0, 10, 400000])).toBe(400030);
});

test("Spaced houses with better values", () => {
  expect(rob([2, 1, 1, 2])).toBe(4);
});
