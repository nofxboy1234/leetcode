/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (!head.next) return head;

  const nodes = [];
  let curr = head;

  while (curr.next) {
    nodes.push(curr);
    curr = curr.next;
  }
  nodes.push(curr);

  const middle = Math.floor(nodes.length / 2);
  return nodes[middle];
};
