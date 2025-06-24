/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 1) return 0;

  let left = 0;
  let right = 1;

  let waterBlocks = 0;

  while (left >= 0 && left < height.length - 1) {
    if (height[right] >= height[left]) {
      // hit a wall
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
    } else if (right === height.length - 1) {
      // reached the end
      // go down 1 step
      left++;
      right = left + 1;
    } else {
      // keep searching for a wall hit
      right++;
    }
  }

  return waterBlocks;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(height);
console.log(result);
