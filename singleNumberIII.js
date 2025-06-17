/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const tally = nums.reduce((tally, num) => {
    tally[num] = (tally[num] || 0) + 1;
    return tally;
  }, {});

  // find nums with tally of 1
  const singleNumbers = [];
  for (const num in tally) {
    if (tally[num] === 1) {
      singleNumbers.push(Number(num));
    }
  }

  return singleNumbers;
};
