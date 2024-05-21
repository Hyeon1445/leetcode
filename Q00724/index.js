/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    let leftSum = 0
    let rightSum = 0
    for(let j = 0; j <= i; j++) {
      leftSum += nums[j]
    }
    for(let k = nums.length  - 1; k >= i; k--) {
      rightSum += nums[k]
    }
    if(leftSum === rightSum) return i
  }
  return -1
};