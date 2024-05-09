/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort((a, b) => Math.abs(b - val) - Math.abs(a - val))
    let count = 0
    while(1) {
        const index = nums.length - 1 - count
        if(count >= nums.length || nums[index] !== val) return nums.length - count
        count++
    }
};