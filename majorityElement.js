/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const tally = nums.reduce((tally, num) => {
    tally[num] = (tally[num] || 0) + 1;
    return tally;
  }, {});

  let majorityElement;
  for (const num in tally) {
    if (tally[num] > Object.keys(tally).length / 2) {
      majorityElement = num;
    }
  }

  return Number(majorityElement);
};

const input = [3, 2, 3];
console.log(majorityElement(input));
