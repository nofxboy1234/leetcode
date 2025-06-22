// Two Sum

{
  /**
   * Two Sum - Optimal Hash Map Solution
   * Time Complexity: O(n) - single pass through array
   * Space Complexity: O(n) - worst case store all elements in map
   */
  function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (map.has(complement)) {
        return [map.get(complement), i];
      }

      map.set(nums[i], i);
    }
  }

  // Test cases
  console.log("Test Case 1:");
  console.log(`Input: nums = [2,7,11,15], target = 9`);
  console.log(`Output: [${twoSum([2, 7, 11, 15], 9)}]`);
  console.log(`Explanation: nums[0] + nums[1] = 2 + 7 = 9\n`);

  console.log("Test Case 2:");
  console.log(`Input: nums = [3,2,4], target = 6`);
  console.log(`Output: [${twoSum([3, 2, 4], 6)}]`);
  console.log(`Explanation: nums[1] + nums[2] = 2 + 4 = 6\n`);

  console.log("Test Case 3:");
  console.log(`Input: nums = [3,3], target = 6`);
  console.log(`Output: [${twoSum([3, 3], 6)}]`);
  console.log(`Explanation: nums[0] + nums[1] = 3 + 3 = 6`);
}

{
  // Time: O(n log n), Space: O(n) - For unsorted arrays, sorting first
  // Time: O(n), Space: O(1) - Only optimal for sorted arrays (below)
  const twoSumUsingTwoPointers = (list, target) => {
    let left = 0;
    let right = list.length - 1;

    while (left < right) {
      let sum = list[left] + list[right];

      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  };

  console.log("\n");
  const sortedNrs = [2, 7, 11, 15];
  console.log(twoSumUsingTwoPointers(sortedNrs, 9));
  console.log(twoSumUsingTwoPointers(sortedNrs, 18));
  const duplicateNumbers = [3, 3];
  console.log(twoSumUsingTwoPointers(duplicateNumbers, 6));
}
