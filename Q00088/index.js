// 88. Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums2.forEach((n, i) => {nums1[nums1.length - 1 - i] = n})
    nums1.sort((a, b) => a - b)
};