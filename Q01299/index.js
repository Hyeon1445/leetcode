/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const answer = [-1]
    let max = arr[arr.length - 1]
    for(let i = 1; i < arr.length; i++) {
        answer.unshift(max)
        max = Math.max(arr[arr.length - 1 - i], max)
    }
    return answer
};