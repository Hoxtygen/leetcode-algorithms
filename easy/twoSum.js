/* 

Given an array of integers nums and an integer target, return indices of the two numbers
such that they add up to target.You may assume that each input would have exactly one 
solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

function twoSum(nums, target) {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    let targetDifference = target - nums[i];
    if (cache.has(targetDifference)) {
      return [cache.get(targetDifference), i];
    } else {
      cache.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoSum([1, 3, 10, 11, 14], 13));
console.log(twoSum([1, 3, 10, 11, 14], 24));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 22));
console.log(twoSum([2, 7, 11, 15], 90));

// solution variation
function twoSum(nums, target) {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    if (cache.has(target - currentValue)) {
      return [i, cache.get(target - currentValue)];
    } else {
      cache.set(currentValue, i);
    }
  }
  return [];
}
