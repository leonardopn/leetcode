import { expect, test } from "vitest";
import { mergeTwoLists } from "./index";

// Helper class and functions for testing
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function arrayToList(arr: number[]): ListNode | null {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
  let arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

test("Example 1: merge [1,2,4] and [1,3,4]", () => {
  const list1 = arrayToList([1, 2, 4]);
  const list2 = arrayToList([1, 3, 4]);
  const merged = mergeTwoLists(list1, list2);
  expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
});

test("Example 2: merge [] and []", () => {
  const list1 = arrayToList([]);
  const list2 = arrayToList([]);
  const merged = mergeTwoLists(list1, list2);
  expect(listToArray(merged)).toEqual([]);
});

test("Example 3: merge [] and [0]", () => {
  const list1 = arrayToList([]);
  const list2 = arrayToList([0]);
  const merged = mergeTwoLists(list1, list2);
  expect(listToArray(merged)).toEqual([0]);
});

test("merge [1,3,5] and [2,4,6]", () => {
  const list1 = arrayToList([1, 3, 5]);
  const list2 = arrayToList([2, 4, 6]);
  const merged = mergeTwoLists(list1, list2);
  expect(listToArray(merged)).toEqual([1, 2, 3, 4, 5, 6]);
});

test("merge [1,2,3] and []", () => {
  const list1 = arrayToList([1, 2, 3]);
  const list2 = arrayToList([]);
  const merged = mergeTwoLists(list1, list2);
  expect(listToArray(merged)).toEqual([1, 2, 3]);
});

test("merge [-3,-2,-1] and [-2,0,2]", () => {
  const list1 = arrayToList([-3, -2, -1]);
  const list2 = arrayToList([-2, 0, 2]);
  const merged = mergeTwoLists(list1, list2);
  expect(listToArray(merged)).toEqual([-3, -2, -2, -1, 0, 2]);
});

test("merge [5,10,15] and [2,3,20]", () => {
  const list1 = arrayToList([5, 10, 15]);
  const list2 = arrayToList([2, 3, 20]);
  const merged = mergeTwoLists(list1, list2);
  expect(listToArray(merged)).toEqual([2, 3, 5, 10, 15, 20]);
});
