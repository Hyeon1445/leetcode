function runningSum(nums) {
    const arr = [];
    nums.forEach(num => {
        if(!arr.length) arr.push(num)
        else {
            arr.push(arr[arr.length -1] + num)
        }
    })
    return arr
};