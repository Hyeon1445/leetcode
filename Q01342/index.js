/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0
    let currentNumber = num
    while(currentNumber > 0) {
        if(currentNumber % 2 === 0) currentNumber = currentNumber / 2
        else currentNumber = currentNumber - 1
        count++
    }
    return count
};