/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let index1 = 0;
  let index2 = -1;
  let maxPalindrome = s[0];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      index1 = i;
      index2 = i + 1;
      if (maxPalindrome.length < index2 - index1 + 1) {
        maxPalindrome = s.substring(index1, index2 + 1);
      }
      while (
        s[index1 - 1] === s[index2 + 1] &&
        index1 > 0 &&
        index2 < s.length
      ) {
        index1 = index1 - 1;
        index2 = index2 + 1;
        if (maxPalindrome.length < index2 - index1 + 1) {
          maxPalindrome = s.substring(index1, index2 + 1);
        }
      }
    }
    if (s[i] === s[i + 2]) {
      index1 = i;
      index2 = i + 2;
      if (maxPalindrome.length < index2 - index1 + 1) {
        maxPalindrome = s.substring(index1, index2 + 1);
      }
      while (
        s[index1 - 1] === s[index2 + 1] &&
        index1 > 0 &&
        index2 < s.length
      ) {
        index1 = index1 - 1;
        index2 = index2 + 1;
        if (maxPalindrome.length < index2 - index1 + 1) {
          maxPalindrome = s.substring(index1, index2 + 1);
        }
      }
    }
  }
  return maxPalindrome;
};

console.log(longestPalindrome("cbbd"));
