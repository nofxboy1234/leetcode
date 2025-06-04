/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Count frequency of each letter in the magazine
  const letterCount = new Map();

  for (const letter of magazine) {
    letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
  }

  // Check if we can construct the ransom note
  for (const letter of ransomNote) {
    const count = letterCount.get(letter) || 0;

    if (count === 0) {
      // Not enough of this letter available
      return false;
    }

    // Use one instance of this letter
    letterCount.set(letter, count - 1);
  }

  return true;
};

let result;

result = canConstruct("a", "b");
console.log(result);

result = canConstruct("aa", "ab");
console.log(result);

result = canConstruct("aa", "aab");
console.log(result);
