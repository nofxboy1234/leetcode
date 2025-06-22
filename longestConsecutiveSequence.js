/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const unique = new Set(nums);
  let maxCount = 1;

  unique.forEach((value) => {
    if (!unique.has(value - 1)) {
      let current = value;
      let count = 1;

      while (unique.has(current + 1)) {
        count++;
        current++;
      }

      maxCount = Math.max(count, maxCount);
    }
  });

  return maxCount;
};
