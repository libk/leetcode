/**
 Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var first = null,
        second = null,
        third = null;
    for(var i=0; i<nums.length; i++) {
        if(first==nums[i] || second==nums[i] || third==nums[i]) continue;
        else if(first===null || nums[i]>first) {
            third = second;
            second = first;
            first = nums[i];
        }
        else if(second===null || nums[i]>second) {
            third = second;
            second = nums[i];
        }
        else if(third===null || nums[i]>third) {
            third = nums[i];
        }
    }
    return third === null ? first : third;
};