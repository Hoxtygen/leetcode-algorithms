/* 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1

 

Constraints:

    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// time = O(n)
// space = O(n)

function arrToObject(nums) {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (cache.has(nums[i])) {
      cache.set(nums[i], cache.get(nums[i]) + 1);
    } else {
      cache.set(nums[i], 1);
    }
  }
  return cache;
}

function single(obj) {
  for (const val of obj.keys()) {
    if (obj.get(val) === 1) {
      return val;
    }
  }
}

var singleNumber = function (nums) {
  const obj = arrToObject(nums);
  const result = single(obj);
  return result;
};

// time = O(n)
// space = O(1)

function singleNumber(nums) {
  let singleValue = nums[0];
  for (let i = 1; i < nums.length; i++) {
    singleValue = singleValue ^ nums[i];
  }
  return singleValue;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
