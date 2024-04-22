/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const input = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  for (let i = 0; i < Math.floor(input.length / 2); i++) {
    if (input[i] !== input[input.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
