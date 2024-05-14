/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    nums.sort((a, b) => (a % 2 === b % 2 && 0) || (a % 2 === 0 && -1) || 1)
    return nums
};