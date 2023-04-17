/**
 Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let right = nums.length - 1;
  let left = 0;
  let result = [];
  let position = nums.length - 1;
  while (left <= right) {
    if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
      result[position] = nums[left] ** 2;
      position--;
      left++;
    } else {
      result[position] = nums[right] ** 2;
      position--;
      right--;
    }
  }
  return result;
};
