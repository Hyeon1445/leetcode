/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const arr = nums.map((_, index) => index + 1)
    nums.forEach(num => arr[num - 1] = 0)
    return arr.filter(num => !!num)
};