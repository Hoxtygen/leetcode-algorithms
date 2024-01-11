/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length
 * of a subarray whose sum is greater than or equal to target. If there is no such subarray, return
 * 0 instead
 *
 * @example Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * @explanation The subarray [4,3] has the minimal length under the problem constraint.
 *
 * @example Input: target = 4, nums = [1,4,4]
 * output: 1
 *
 * @example Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * output: 0
 */

function minSubArrayLen(target, nums) {
  let left_hand_side = 0;
  let runningSum = 0;
  let result = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];

    while (runningSum >= target) {
      runningSum -= nums[left_hand_side];
      result = Math.min(result, i + 1 - left_hand_side);
      left_hand_side++;
    }
  }
  return result != Number.MAX_VALUE ? result : 0;
}
