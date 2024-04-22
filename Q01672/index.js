/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const sum = accounts.map((account) => account.reduce((a, b) => a + b, 0))

    return Math.max(...sum)
};