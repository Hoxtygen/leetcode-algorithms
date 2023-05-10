/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @example
 * <pre>
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * </pre>
 *
 * Constraints
 *  1 <= nums.length <= 104
 * nums contains distinct values sorted in ascending order.
 * -104 <= target <= 104
 */

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

console.log(searchInsert( [1,3,5,6], 5)) //2
console.log(searchInsert( [1,2,3,4,5,6,7], 9)) // 7