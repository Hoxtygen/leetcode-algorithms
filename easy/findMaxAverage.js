/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and
 * return this value. Any answer with a calculation error less than 10-5 will be accepted
 *
 * @example 1:  Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * @explanation : Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 *
 * @example 2: Input: nums = [5], k = 1
 * Output: 5.00000
 */

function findMaxAverage(nums, k) {
  let runningSum = 0;
  let maxAverage = 0;
  for (let i = 0; i < k; i++) {
    runningSum += nums[i];
  }
  maxAverage = runningSum;
  for (let i = k; i < nums.length; i++) {
    runningSum = runningSum - nums[i - k] + nums[i];
    maxAverage = Math.max(runningSum, maxAverage);
  }
  return maxAverage / k;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
