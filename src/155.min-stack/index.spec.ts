import { describe, it, expect } from "vitest";
import { MinStack } from "./index";

describe("MinStack", () => {
  it("should perform operations as in the example", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });

  it("should handle single element stack", () => {
    const minStack = new MinStack();
    minStack.push(42);
    expect(minStack.top()).toBe(42);
    expect(minStack.getMin()).toBe(42);
    minStack.pop();
  });

  it("should handle duplicate minimums", () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(1);
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
  });

  it("should handle increasing order", () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(3);
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
  });

  it("should handle decreasing order", () => {
    const minStack = new MinStack();
    minStack.push(3);
    minStack.push(2);
    minStack.push(1);
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(2);
    minStack.pop();
    expect(minStack.getMin()).toBe(3);
  });

  it("should handle negative and positive values", () => {
    const minStack = new MinStack();
    minStack.push(0);
    minStack.push(-1);
    minStack.push(1);
    expect(minStack.getMin()).toBe(-1);
    minStack.pop();
    expect(minStack.getMin()).toBe(-1);
    minStack.pop();
    expect(minStack.getMin()).toBe(0);
  });
});
