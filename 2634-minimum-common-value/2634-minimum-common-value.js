/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    for (let x = 0; x < nums1.length; x++) {
        for (let y = 0; y < nums2.length; y++) {
            if (nums1[x] === nums2[y])
                return nums1[x];
            if (nums2[y] > nums1[x])
                break;
        }
    }
    return -1;
};