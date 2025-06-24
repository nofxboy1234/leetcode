/**
 * Trap rainwater using two-pointer approach
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using constant extra space
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length <= 2) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // Process left side
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        // Water can be trapped here
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      // Process right side
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        // Water can be trapped here
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
};

// Test cases
console.log("Test 1:");
const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result1 = trap(height1);
console.log(`Input: [${height1.join(", ")}]`);
console.log(`Output: ${result1}`); // Expected: 6

console.log("\nTest 2:");
const height2 = [4, 2, 3];
const result2 = trap(height2);
console.log(`Input: [${height2.join(", ")}]`);
console.log(`Output: ${result2}`); // Expected: 1

console.log("\nTest 3:");
const height3 = [3, 0, 2, 0, 4];
const result3 = trap(height3);
console.log(`Input: [${height3.join(", ")}]`);
console.log(`Output: ${result3}`); // Expected: 7

console.log("\nTest 4 (Edge case):");
const height4 = [2, 1];
const result4 = trap(height4);
console.log(`Input: [${height4.join(", ")}]`);
console.log(`Output: ${result4}`); // Expected: 0
