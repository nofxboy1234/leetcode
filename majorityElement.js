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
  for (const key in tally) {
    const threshold = nums.length / 2;
    const currTally = tally[key];
    if (currTally > threshold) {
      majorityElement = key;
    }
  }

  return Number(majorityElement);
};

let input = [3, 2, 3];
console.log(majorityElement(input));

input = [6, 6, 6, 7, 7];
console.log(majorityElement(input));
