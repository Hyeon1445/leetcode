/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sorted = heights.toSorted((a, b) => a - b)
  let count = 0
  for(let i = 0; i < sorted.length; i++) {
      if(heights[i] !== sorted[i]) count++
  }
  return count
};