/**
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
Example 1:
  Input: [1,4,3,2]
  Output: 4
  Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
  1. n is a positive integer, which is in the range of [1, 10000].
  2. All the integers in the array will be in the range of [-10000, 10000].
*/

/**
将2n个数分成n组，然后取出每组中偏小的数，需要让这n个偏小的数的和最大。假设n个偏小的数的和是a，n个偏大的数的和是b，a+b是固定值，要想让a最大，那么a与b之间的差必须是最小的，最小的情况就是每个偏大的数都只比偏小的数大1。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var result = 0;
    nums.sort( (a,b) => a-b );
    for(let i=0; i<nums.length; i+=2) {
        result += nums[i];
    }
    return result;
};