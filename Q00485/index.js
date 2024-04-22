/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let current = 0
    nums.forEach(num => {
        if(num === 0){
            current = 0            
        } else {
            current++
            max = Math.max(max, current)
        }
    })
    return max
};