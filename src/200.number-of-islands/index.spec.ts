import { expect, test } from "vitest";
import { numIslands } from "./index";

test("Example 1: single island", () => {
  const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  expect(numIslands(grid)).toBe(1);
});

test("Example 2: three islands", () => {
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  expect(numIslands(grid)).toBe(3);
});

test("All water", () => {
  const grid = [
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
  ];
  expect(numIslands(grid)).toBe(0);
});

test("All land", () => {
  const grid = [
    ["1", "1", "1"],
    ["1", "1", "1"],
    ["1", "1", "1"],
  ];
  expect(numIslands(grid)).toBe(1);
});

test("Checkerboard pattern", () => {
  const grid = [
    ["1", "0", "1"],
    ["0", "1", "0"],
    ["1", "0", "1"],
  ];
  expect(numIslands(grid)).toBe(5);
});

test("Single row", () => {
  const grid = [["1", "0", "1", "1", "0", "1"]];
  expect(numIslands(grid)).toBe(3);
});

test("Single column", () => {
  const grid = [["1"], ["0"], ["1"], ["1"], ["0"], ["1"]];
  expect(numIslands(grid)).toBe(3);
});

test("Empty grid", () => {
  const grid: string[][] = [];
  expect(numIslands(grid)).toBe(0);
});

test("Island at the edge", () => {
  const grid = [
    ["1", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "1"],
  ];
  expect(numIslands(grid)).toBe(2);
});
