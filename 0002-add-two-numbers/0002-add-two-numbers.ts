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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = l1;
    let prev: ListNode | null = null;
    let remainder = 0;
    while (l1) {
        l1.val = l1.val + (l2?.val || 0) + remainder;
        remainder = Math.floor(l1.val / 10)
        l1.val = l1.val % 10;
        prev = l1;
        l1 = l1.next;
        l2 = l2?.next || null;
        if (!l1 && l2) {
            prev.next = l2;
            l1 = l2;
            l2 = null;
        }
        if (remainder && !l1) {
            prev.next = new ListNode(remainder)
        }
    }

    return head;
};
