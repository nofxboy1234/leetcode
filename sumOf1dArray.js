/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum2 = function (nums) {
  return nums.map((num, index) =>
    nums.slice(0, index + 1).reduce((sum, cur) => sum + cur, 0)
  );
};

var runningSum = function (nums) {
  const result = [];

  nums.forEach((num, index) => {
    const runSlice = nums.slice(0, index + 1);
    const runSum = runSlice.reduce((sum, cur) => sum + cur);

    result.push(runSum);
  });

  return result;
};

const result = runningSum2([1, 2, 3, 4]);
console.log(result);
