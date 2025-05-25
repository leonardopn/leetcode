import { expect, test } from "vitest";
import { letterCombinations } from "./index";

test("returns all combinations for '23'", () => {
  const result = letterCombinations("23");
  expect(result.sort()).toEqual(
    ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort()
  );
});

test("returns empty array for empty input", () => {
  expect(letterCombinations("")).toEqual([]);
});

test("returns all combinations for single digit '2'", () => {
  const result = letterCombinations("2");
  expect(result.sort()).toEqual(["a", "b", "c"].sort());
});

test("returns all combinations for '79'", () => {
  const result = letterCombinations("79");
  expect(result.sort()).toEqual(
    [
      "pw",
      "px",
      "py",
      "pz",
      "qw",
      "qx",
      "qy",
      "qz",
      "rw",
      "rx",
      "ry",
      "rz",
      "sw",
      "sx",
      "sy",
      "sz",
    ].sort()
  );
});

test("returns all combinations for '234'", () => {
  const result = letterCombinations("234");
  expect(result.length).toBe(27); // 3*3*3
  expect(result).toContain("adg");
  expect(result).toContain("cfi");
});

test("returns all combinations for '7'", () => {
  const result = letterCombinations("7");
  expect(result.sort()).toEqual(["p", "q", "r", "s"].sort());
});

test("returns all combinations for '8'", () => {
  const result = letterCombinations("8");
  expect(result.sort()).toEqual(["t", "u", "v"].sort());
});

test("returns all combinations for '9'", () => {
  const result = letterCombinations("9");
  expect(result.sort()).toEqual(["w", "x", "y", "z"].sort());
});
