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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let current = head;
    const nodesArr: ListNode[] = [];
    while (current) {
        nodesArr.push(current);
        current = current.next;
    }
    const nodesLen = nodesArr.length;
    if (nodesLen === 1) return null;
    if (n === nodesLen) return head.next;
    if (n == 1) {
        nodesArr[nodesLen - n - 1].next = null;
    } else {
        nodesArr[nodesLen - n - 1].next = nodesArr[nodesLen - n + 1]
    }

    return head;
};