/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const max = Math.max(...nums)
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] * 2 > max && max !== nums[i]) return -1
    }
    return nums.findIndex(num => num === max)
};