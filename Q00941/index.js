/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 2 || arr[0] > arr[1]) return false
    let isDecreasing = false
    for(let i = 1; i < arr.length; i++) {
        if(!isDecreasing && arr[i - 1] >= arr[i]) isDecreasing = true
        if(isDecreasing && arr[i - 1] <= arr[i]) return false
    }
    return isDecreasing
};