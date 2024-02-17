/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 * @example
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Ouput: [2]
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * Explanation: [4,9] is also accepted.
 *
 * @author Wasiu Idowu
 */

// Method 1 ( 2 pointers technique)
function intersection(nums1, nums2) {
  let result = [];
  let i = 0;
  let j = 0;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j] && !result.includes(nums1[i])) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}


// Method 2
function intersection(nums1, nums2) {
  const nums2Set = new Set(nums2);
  const result = new Set();

  for (let i = 0; i < nums1.length; i++) {
    if (nums2Set.has(nums1[i])) {
      result.add(nums1[i]);
    }
  }
  return [...result];
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));