/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const arr = [...new Set(nums)]
    arr.sort((a, b) => b - a)
    return arr[2] ?? arr[0]
};