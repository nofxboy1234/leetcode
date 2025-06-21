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
console.log(factorial(18));

// **************************************************************************
// Analysis

const productList = [
  { name: "Laptop", price: 18487 },
  { name: "Keyboard", price: 356 },
  { name: "Monitor", price: 8345 },
  // ...assuming 10000 more items here in between
  { name: "Tablet", price: 9875 },
];

// -- Always assume the worst case --
// Time: O(n)
function lookupPrice(name, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) {
      console.log(`Price of '${list[i].name}' is: ${list[i].price}`);
      break;
    }
  }
}

lookupPrice("Monitor", productList);
// => OUTPUT: "Price of 'Monitor' is: 8345"

// -- Each input should have a unique variable --
// function recieves 2 different inputs, let's call them 'a' and 'b'
function printLists(listOne, listTwo) {
  // iterates through input 'listOne' -> O(a) Linear time
  for (let i = 0; i < listOne.length; i++) {
    console.log(listOne[i]);
  }

  // iterates through input 'listTwo' -> O(b) Linear time
  for (let i = 0; i < listTwo.length; i++) {
    console.log(listTwo[i]);
  }
}
// End result for Big O => O(a + b)

const numbers = [1, 2, 3, 4];
const letters = ["a", "b"];
printLists(numbers, letters);

// nested loop with 2 different inputs

// function recieves 2 different inputs, let's call them 'a' and 'b'
function servingDrinks(drinkList, personsList) {
  // iterates through input 'drinkList' -> O(a) Linear time
  for (let i = 0; i < drinkList.length; i++) {
    // iterates through input 'personsList' -> O(b) Linear time
    for (let j = 0; j < personsList.length; j++) {
      console.log(`Gives ${drinkList[i]} to ${personsList[j]}`);
    }
  }
}

const drinks = ["water", "coffee"];
const persons = ["person 1", "person 2", "person 3", "person 4"];
servingDrinks(drinks, persons);

// End result for Big O => O (a * b)
// 2 x 4 = 8 iterations

/*
OUTPUT:
'Gives water to person 1'
'Gives water to person 2'
'Gives water to person 3'
'Gives water to person 4'
'Gives coffee to person 1'
'Gives coffee to person 2'
'Gives coffee to person 3'
'Gives coffee to person 4'
*/

// -- Drop the constants --
// function recieves a single input
function printFirstHalf(list) {
  // iterates through list -> O(n) Linear time
  for (let i = 0; i < list.length / 2; i++) {
    console.log(list[i]);
  }
}

const numbers2 = [1, 2, 3, 4, 5, 6];
printFirstHalf(numbers2);
// Big O total => O (n / 2) => O(n)

/* 
OUTPUT:
1
2
3
*/

//

// function recieves a single input
function printTwiceForNoReason(list) {
  // iterates through list -> O(n) Linear time
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
  // iterates through the same list again -> O(n) Linear time
  for (let j = 0; j < list.length; j++) {
    console.log(list[j]);
  }
}

const numbers3 = [1, 2, 3];
printTwiceForNoReason(numbers3);

// Big O total => O(n + n) => O(2n) => O(n)

/*
OUTPUT:
1
2
3
1
2
3
*/

// -- Drop non-dominant terms --

// function recieves a single input
function printAndPair(arr) {
  // iterates through list -> O(n) Linear time
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  // declares variable -> O(1) Constant time
  const totalPairs = arr.length * arr.length;
  // prints given value -> O(1) Constant time
  console.log("Estimated paired elements length:", totalPairs);

  // nested loop using the same array -> O(n ^ 2) Quadratic time
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      console.log(`${arr[j]} - ${arr[k]}`);
    }
  }
}

const fruits2 = ["apple", "strawberry", "watermelon"];
printAndPair(fruits2);

// Big O total => O(n) + O(1) + O(1) + O(n ^ 2)
//                O(n) + O(2)        + O(n ^ 2)
//                O(n)               + O(n ^ 2)
//                                     O(n ^ 2)
/*
OUTPUT:
'apple'
'strawberry'
'watermelon'

'Estimated paired elements length:' 9

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

// -- Analyzing space complexity --

{
  function getTotal(arr) {
    // Declares variable - let total -> O(1)
    let total = 0;
    // Declares variable - let i -> O(1)
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }

  // Big O space complexity => O(1) + O(1) => O(2) = O(1) Constant
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(getTotal(numbers)); // OUTPUT => 21
}

{
  function bookTables(list) {
    // Declares variable - let tables -> O(1)
    let tables = [];
    // Declares variable - let i -> O(1)
    for (let i = 0; i < list.length; i++) {
      // Pushes values based on the list length - O(n)
      tables.push(`Table ${i + 1} is reserved for ${list[i]}`);
    }
    return tables;
  }

  // Big O total => O(1) + O(1) + O(n)
  // Big O space complexity after dropping constants => O(n) Linear
  const guests = ["John", "Jane", "Adam", "Olivia", "Alan", "Amy", "Joe"];
  const bookedList = bookTables(guests);
  console.log(bookedList);

  /* OUTPUT:
[
  'Table 1 is reserved for John',
  'Table 2 is reserved for Jane',
  'Table 3 is reserved for Adam',
  'Table 4 is reserved for Olivia',
  'Table 5 is reserved for Alan',
  'Table 6 is reserved for Amy',
  'Table 7 is reserved for Joe'
]
*/
}

{
  // Time: O(2ⁿ) - Exponential, Space: O(n)
  function fibonacciRecursive(num) {
    // exit conditions, return if it is 0 or 1
    if (num === 0) return 0;
    else if (num === 1) return 1;
    // else, call the function recursively
    else return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
  }

  console.log(fibonacciRecursive(4));
  // OUTPUT => 3
}

// Two Sum
{
  // Time: O(n^2), Space: O(1)
  const twoSumBrute = (list, target) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[i] + list[j] === target) {
          return [i, j];
        }
      }
    }
  };

  const unsortedNrs = [4, 2, 6, 3, 1, 5, 9, 7, 8, 10];
  console.log(twoSumBrute(unsortedNrs, 7));
  const sortedNrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(twoSumBrute(sortedNrs, 7));

  // OUTPUT => [0, 3]
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

  const unsortedNrs = [4, 2, 6, 3, 1, 5, 9, 7, 8, 10];
  console.log(twoSumHashmap(unsortedNrs, 7));
  const sortedNrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(twoSumHashmap(sortedNrs, 7));
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

  const sortedNrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(twoSumUsingTwoPointers(sortedNrs, 7));
  // OUTPUT => [0, 5]
}
