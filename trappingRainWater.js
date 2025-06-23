/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 1) return 0;

  let left = 0;
  let right = 1;

  let waterBlocks = 0;

  while (
    left >= 0 &&
    left < height.length - 3 &&
    right >= 1 &&
    right < height.length
  ) {
    if (height[right] >= height[left]) {
      // calculate max water depth between left and right
      const maxWaterDepth = Math.min(height[left], height[right]);
      // move left pointer to right pointer and get depth at each index along the way
      if (maxWaterDepth === 0) {
        left = right;
      }

      while (left < right) {
        const currentWaterDepth = maxWaterDepth - height[left];
        waterBlocks += currentWaterDepth;
        left++;
      }

      right++;
    } else {
      right++;
    }
  }

  return waterBlocks;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(height);
console.log(result);
