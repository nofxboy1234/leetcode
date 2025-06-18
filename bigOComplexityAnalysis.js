const example = [1, 2, 3, 4, 5, 6, 7];

// Time: O(n) - Linear
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("element:", arr[i]);
  }
}

printArray(example);

// Time: O(n) - Linear
const tenArray = Array.from(Array(10).keys());

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Found the target: ${target} at index ${i}`;
    }
  }
};

linearSearch(tenArray, 5);

// Time: O(1) - Constant
const tenItems = new Array(10).fill("foo");
const millionItems = new Array(1000000).fill("bar");

function returnFirstElement(arr) {
  return arr[0];
}

returnFirstElement(tenItems);
// this will take same amount of time as tenItems array:
returnFirstElement(millionItems);

// Time: O(1) - Constant
function printOnlyFirstFive(array) {
  for (let i = 0; i < 5; i++) {
    console.log("element:", array[i]);
  }
}

printOnlyFirstFive(tenItems);
// this will take same amount of time as tenItems array:
printOnlyFirstFive(millionItems);

// Time: O(1) - Constant
const todaysMenu = {
  breakfast: "Smoothie",
  lunch: "Sallad",
  dinner: "Sushi",
};

function whatIsInTheMenu(menu, type) {
  return menu[type];
}

whatIsInTheMenu(todaysMenu, "breakfast"); // => Smoothie

// Time: O(1) - Constant
function addTen(n) {
  return n + 10;
}

console.log(addTen(10)); // => 20
console.log(addTen(1000000)); // => 1000010

function isEvenOrOdd(n) {
  return n % 2 ? "Odd" : "Even";
}

console.log(isEvenOrOdd(10)); // => Even
console.log(isEvenOrOdd(10001)); // => Odd

// -- Linear vs Logarithmic Time --
const tenArray2 = Array.from(Array(10).keys());

// O(n) - LINEAR RUNTIME
const linearSearch2 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Found the target: ${target} at index ${i}`;
    }
  }
};

// O(log n) - LOGARITHMIC RUNTIME
const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let pivot = Math.floor((startIndex + endIndex) / 2);

    if (arr[pivot] === target) {
      return `Found the target: ${target} at index ${pivot}`;
    } else if (arr[pivot] < target) {
      startIndex = pivot + 1;
    } else {
      endIndex = pivot - 1;
    }
  }
  return false;
};

let beforeLinear = performance.now();
linearSearch2(tenArray2, 5);
let afterLinear = performance.now();

let beforeBinary = performance.now();
binarySearch(tenArray2, 5);
let afterBinary = performance.now();

console.log("Milliseconds linear search:", afterLinear - beforeLinear);
console.log("Milliseconds binary search:", afterBinary - beforeBinary);

// RESULT:
// => 'Milliseconds linear search:' 0.02500019036233425
// => 'Milliseconds binary search:' 0.06500002928078175

const millionArray = Array.from(Array(1000000).keys());

let beforeLinear2 = performance.now();
linearSearch(millionArray, 567841);
let afterLinear2 = performance.now();

let beforeBinary2 = performance.now();
binarySearch(millionArray, 567841);
let afterBinary2 = performance.now();

console.log("Milliseconds linear search:", afterLinear2 - beforeLinear2);
console.log("Milliseconds binary search:", afterBinary2 - beforeBinary2);

// RESULT:
// => 'Milliseconds linear search:' 2.185000106692314
// => 'Milliseconds binary search:' 0.054999953135848045

//
const tenItems2 = new Array(10).fill("foo");
const hundredItems = new Array(100).fill("bar");

function printArray2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("element:", arr[i]);
  }
}

printArray2(tenItems2);
// this will take 10 times longer than iterating tenItems2 array:
printArray2(hundredItems);

// Time: O(n log n) - Linearithmic
// sorting helper:
const merge = (left, right) => {
  let result = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
};

// main function
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.length / 2;
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

const someArray = [3, 14, 7, 11, 6, 1, 21, 9, 14, 15];
mergeSort(someArray);

// Time: O(n²) - Quadratic (Polynomial time complexity)
function logAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`${arr[i]} - ${arr[j]}`);
    }
  }
}

const fruits = ["apple", "strawberry", "watermelon"];
logAllPairs(fruits);

/* Output => 
'apple - apple'
'apple - strawberry'
'apple - watermelon'
'strawberry - apple'
'strawberry - strawberry'
'strawberry - watermelon'
'watermelon - apple'
'watermelon - strawberry'
'watermelon - watermelon'
*/

// Time: O(2ⁿ) - Exponential, Space: O(n)
function fibonacciRecursive(index) {
  // exit conditions, return if it is 0 or 1
  if (index === 0) return 0;
  else if (index === 1) return 1;
  // else, call the function recursively
  else {
    const prev1 = fibonacciRecursive(index - 1);
    const prev2 = fibonacciRecursive(index - 2);
    return prev1 + prev2;
  }
}

const result = fibonacciRecursive(4);
console.log(result);
// OUTPUT => 3

// 1. ITERATIVE APPROACH - Most Practical
// Time: O(n), Space: O(1)
function fibonacciIterative(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;

  let prev2 = 0; // F(0)
  let prev1 = 1; // F(1)
  let current;

  for (let i = 2; i <= index; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}

const result2 = fibonacciIterative(4);
console.log(result2);

// Time: O(n!) - Factorial
function getPermutations(arr) {
  if (arr.length <= 2) {
    if (arr.length === 2) return [arr, [arr[1], arr[0]]];
    return arr;
  }
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        getPermutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(
          (val) => [item, ...val]
        )
      ),
    []
  );
}

const cities = ["Copenhagen", "Stockholm", "Oslo"];
const result3 = getPermutations(cities);
console.log(result3);

// Time: O(n), Space: O(1)
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(3));
