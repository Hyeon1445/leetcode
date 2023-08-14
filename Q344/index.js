/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  const length = s.length;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }
};

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
