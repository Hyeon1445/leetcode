/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums.sort((a, b) => a - b)
    const set = [...new Set(nums)]
    nums.forEach((_, index) => nums[index] = set[index])
    return set.length
};