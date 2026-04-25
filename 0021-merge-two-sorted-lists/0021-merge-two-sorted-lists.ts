/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let current: ListNode | null = null;
  let tmp: ListNode | null = null;
  let newListHead: ListNode;
  if (list1.val <= list2.val) {
    newListHead = new ListNode(list1.val, null);
    list1 = list1.next;
  } else {
    newListHead = new ListNode(list2.val, null);
    list2 = list2.next;
  }
  current = newListHead;

  while (true) {
    if (!list1 && !list2) break;
    if (list1 && !list2) {
      tmp = current;
      current = new ListNode(list1.val, null);
      tmp.next = current;
      list1 = list1.next;
    }
    if (!list1 && list2) {
      tmp = current;
      current = new ListNode(list2.val, null);
      tmp.next = current;
      list2 = list2.next;
    }
    if (list1 && list2) {
      if (list1.val <= list2.val) {
        tmp = current;
        current = new ListNode(list1.val, null);
        tmp.next = current;
        list1 = list1.next;
      } else {
        tmp = current;
        current = new ListNode(list2.val, null);
        tmp.next = current;
        list2 = list2.next;
      }
    }
  }

  return newListHead;
}