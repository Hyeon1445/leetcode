/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const answer = []
    let index = 0
    while(index < arr.length && answer.length < arr.length) {
        if(arr[index] === 0) {
            answer.push(0)
            if(answer.length < arr.length) answer.push(0)
        } else {
            answer.push(arr[index])
        }
        index++
    }
    for(let i = 0; i < answer.length; i++) {
        arr[i] = answer[i]
    }
};