// Two Sum
{
  // Time: O(n^2), Space: O(1)
  const twoSumBrute = (list, target) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[i] === list[j]) continue;
        if (list[i] + list[j] === target) {
          return [i, j];
        }
      }
    }
  };

  const sortedNrs = [2, 7, 11, 15];
  console.log(twoSumBrute(sortedNrs, 9));
  const unsortedNrs = [3, 2, 4];
  console.log(twoSumBrute(unsortedNrs, 6));
}

{
  // Time: O(n), Space: O(n)
  const twoSumHashmap = (list, target) => {
    // Time: O(1), Space: O(1)
    const lookupTable = {};

    // build a lookup table
    // Time: O(n), Space: O(n)
    for (let i = 0; i < list.length; i++) {
      lookupTable[list[i]] = i;
    }

    // iterate
    // Time: O(n)
    for (let j = 0; j < list.length; j++) {
      // Time: O(1), Space: O(1)
      let diff = target - list[j];
      // Time: O(1)
      if (lookupTable[diff] && lookupTable[diff] !== j) {
        return [j, lookupTable[diff]];
      }
    }
  };
  // Time: O(1) + O(n) + O(n) + O(1) + O(1) => O(n)
  // Space: O(1) + O(n) + O(1) => O(n)

  const sortedNrs = [2, 7, 11, 15];
  console.log(twoSumHashmap(sortedNrs, 9));
  const unsortedNrs = [3, 2, 4];
  console.log(twoSumHashmap(unsortedNrs, 6));
}

{
  // Time: O(n), Space: O(1)
  const twoSumUsingTwoPointers = (sortedNums, target) => {
    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
      let sum = sortedNums[left] + sortedNums[right];

      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  };
  // Total Time: O(n) + O(1) => O(n)
  // Total Space: O(1)

  const sortedNrs = [2, 7, 11, 15];
  console.log(twoSumUsingTwoPointers(sortedNrs, 9));
}
