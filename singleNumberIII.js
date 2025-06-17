/**
 * Single Number III - Find two numbers that appear only once
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // Step 1: XOR all numbers to get xor of the two unique numbers
  let xor = 0;
  for (const num of nums) {
    xor ^= num;
  }

  // Step 2: Find the rightmost set bit (where the two numbers differ)
  // This isolates one bit where num1 and num2 are different
  const rightmostBit = xor & -xor;

  // Step 3: Divide numbers into two groups based on this bit
  // Group 1: numbers with this bit set to 1
  // Group 2: numbers with this bit set to 0
  let num1 = 0,
    num2 = 0;

  for (const num of nums) {
    if (num & rightmostBit) {
      num1 ^= num; // XOR all numbers in group 1
    } else {
      num2 ^= num; // XOR all numbers in group 2
    }
  }

  return [num1, num2];
};

// Example walkthrough with [1,2,1,3,2,5]:
console.log("=== Step-by-step walkthrough ===");
console.log("Input: [1,2,1,3,2,5]");
console.log("Step 1: XOR all numbers");
console.log("1^2^1^3^2^5 = 3^5 = 6 (binary: 110)");
console.log("Step 2: Find rightmost set bit");
console.log("6 & (-6) = 6 & 250 = 2 (binary: 010)");
console.log("Step 3: Group by bit 1 (position 1):");
console.log("Group 1 (bit 1 = 1): 2, 3, 2 → 2^3^2 = 3");
console.log("Group 2 (bit 1 = 0): 1, 1, 5 → 1^1^5 = 5");
console.log("Result: [3, 5]");

// Test cases
console.log("\n=== Test Cases ===");
console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3,5] or [5,3]
console.log(singleNumber([-1, 0])); // [-1,0] or [0,-1]
console.log(singleNumber([0, 1])); // [1,0] or [0,1]

// Bit manipulation explanation
console.log("\n=== Bit Manipulation Key ===");
console.log("XOR properties:");
console.log("- a ^ a = 0 (same numbers cancel out)");
console.log("- a ^ 0 = a (XOR with 0 gives original)");
console.log("- XOR is commutative and associative");
console.log("\nRightmost set bit trick:");
console.log("- x & (-x) isolates the rightmost 1 bit");
console.log("- Example: 6 = 110, -6 = ...11111010");
console.log("- 6 & (-6) = 110 & ...11111010 = 010 = 2");
