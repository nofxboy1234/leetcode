/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n);

  // First pass: calculate prefix products and store in result array
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Second pass: multiply by suffix products on the fly
  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * suffixProduct;
    suffixProduct *= nums[i];
  }

  return result;
};

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]

// Step-by-step walkthrough for [1, 2, 3, 4]:
// After first pass (prefix products): [1, 1, 2, 6]
// Second pass:
// i=3: result[3] = 6 * 1 = 6,   suffixProduct = 1 * 4 = 4
// i=2: result[2] = 2 * 4 = 8,   suffixProduct = 4 * 3 = 12
// i=1: result[1] = 1 * 12 = 12, suffixProduct = 12 * 2 = 24
// i=0: result[0] = 1 * 24 = 24, suffixProduct = 24 * 1 = 24
// Final result: [24, 12, 8, 6]
