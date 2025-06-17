/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .trim()
    .replaceAll(/\s{2,}/g, " ")
    .split(" ")
    .reverse()
    .join(" ");
};
