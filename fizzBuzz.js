/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  return result.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    }

    if (num % 3 === 0) {
      return "Fizz";
    }

    if (num % 5 === 0) {
      return "Buzz";
    }

    return num.toString();
  });
};

let result;
result = fizzBuzz(3);
console.log(result);

result = fizzBuzz(5);
console.log(result);

result = fizzBuzz(15);
console.log(result);
