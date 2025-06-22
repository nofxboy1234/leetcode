/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of numSet) {
    // Only start counting if this is the beginning of a sequence
    if (numSet.has(num - 1)) continue;

    let currentNum = num;
    let currentLength = 1;

    // Count consecutive numbers
    while (numSet.has(currentNum + 1)) {
      currentNum++;
      currentLength++;
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};
