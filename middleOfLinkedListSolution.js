// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Find the middle node of a linked list using two pointers
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // Use two pointers: slow moves 1 step, fast moves 2 steps
  let slow = head;
  let fast = head;

  // When fast reaches the end, slow will be at the middle
  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer 1 step
    fast = fast.next.next; // Move fast pointer 2 steps
  }

  // slow is now pointing to the middle node
  // (or second middle if even number of nodes)
  return slow;
};

// Helper function to create linked list from array (for testing)
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert linked list to array (for testing)
function linkedListToArray(head) {
  let result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// Test cases
console.log("Test Case 1: [1,2,3,4,5]");
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let middle1 = middleNode(list1);
console.log("Result:", linkedListToArray(middle1)); // [3,4,5]

console.log("\nTest Case 2: [1,2,3,4,5,6]");
let list2 = createLinkedList([1, 2, 3, 4, 5, 6]);
let middle2 = middleNode(list2);
console.log("Result:", linkedListToArray(middle2)); // [4,5,6]

console.log("\nTest Case 3: [1] (single node)");
let list3 = createLinkedList([1]);
let middle3 = middleNode(list3);
console.log("Result:", linkedListToArray(middle3)); // [1]

console.log("\nTest Case 4: [1,2] (two nodes)");
let list4 = createLinkedList([1, 2]);
let middle4 = middleNode(list4);
console.log("Result:", linkedListToArray(middle4)); // [2]
