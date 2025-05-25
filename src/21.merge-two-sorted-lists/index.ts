/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Temporal Big O: O(n) Espacial Big O: O(1)
// @lc code=start
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let pointer = new ListNode(-1);
  let ref = pointer;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      ref.next = list1;
      list1 = list1.next;
    } else {
      ref.next = list2;
      list2 = list2.next;
    }

    ref = ref.next;
  }

  if (list1) {
    ref.next = list1;
  } else {
    ref.next = list2;
  }

  return pointer.next;
}
// @lc code=end
