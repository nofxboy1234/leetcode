/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteChars = {};
  const magazineChars = {};

  ransomNote
    .split("")
    .forEach((letter) =>
      ransomNoteChars[letter]
        ? (ransomNoteChars[letter] += 1)
        : (ransomNoteChars[letter] = 1)
    );

  magazine
    .split("")
    .forEach((letter) =>
      magazineChars[letter]
        ? (magazineChars[letter] += 1)
        : (magazineChars[letter] = 1)
    );

  console.log(ransomNoteChars);
  console.log(magazineChars);

  const result = Object.keys(ransomNoteChars).map((char) => {
    if (!magazineChars[char]) {
      return false;
    }

    if (magazineChars[char] < ransomNoteChars[char]) {
      return false;
    }

    return true;
  });

  return result.every((check) => check === true);
};

let result;

result = canConstruct("a", "b");
console.log(result);

result = canConstruct("aa", "ab");
console.log(result);

result = canConstruct("aa", "aab");
console.log(result);
