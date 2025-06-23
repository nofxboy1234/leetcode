/**
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function (height) {
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

var trap = function (height) {
  if (height.length === 1) return 0;

  const maxHeight = Math.max(...height);
  const maxIndex = height.findIndex(
    (currentHeight) => currentHeight === maxHeight
  );

  let waterBlocks = 0;

  let currentHeight = height[maxIndex];

  while (currentHeight >= 1) {
    let left = maxIndex;
    let right = maxIndex;

    while (right < height.length) {
      if (height[right] >= currentHeight) {
        while (right - left > 1) {
          left++;
          waterBlocks += 1;
        }

        left = right;
        right++;
      } else {
        right++;
      }
    }
    currentHeight--;
  }

  currentHeight = height[maxIndex];

  while (currentHeight >= 1) {
    let left = maxIndex;
    let right = maxIndex;

    while (left >= 0) {
      if (height[left] >= currentHeight) {
        while (right - left > 1) {
          right--;
          waterBlocks += 1;
        }

        right = left;
        left--;
      } else {
        left--;
      }
    }
    currentHeight--;
  }

  return waterBlocks;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(height);
console.log(result);
