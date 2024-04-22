/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const answer = {};
  for (let n = 0; n < strs.length; n++) {
    const sortedStr = strs[n]
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
    if (!answer[sortedStr]) {
      answer[sortedStr] = [strs[n]];
    } else {
      answer[sortedStr].push(strs[n]);
    }
  }
  return Object.values(answer);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
