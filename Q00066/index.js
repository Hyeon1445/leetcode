/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = 0n
    for(let i = 0; i < digits.length; i++) {
        num = num * 10n + BigInt(digits[i])
    }
    return String(num + 1n).split("")
};