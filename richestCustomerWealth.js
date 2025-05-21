/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const wealths = accounts.map((customerAccounts) => {
    return customerAccounts.reduce((sum, cur) => sum + cur);
  });
  return Math.max(...wealths);
};

let result;
result = maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);
console.log(result);

result = maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
console.log(result);

result = maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
console.log(result);
