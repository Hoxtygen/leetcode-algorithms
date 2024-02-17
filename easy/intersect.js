/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 *  Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * @example
 * Example 1:Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2,2]
 * Example 2: Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] Output: [4,9] Explanation: [9,4] is also accepted.
 * @author Wasiu Idowu
 */

// Method 1.
function intersect(nums1, nums2) {
  let result = [];
  const map = new Map();
  for (const item of nums1) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (const item of nums2) {
    if (map.has(item) && map.get(item) > 0) {
      result.push(item);
      map.set(item, map.get(item) - 1);
    }
  }
  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2], [1, 1]));

// Method 2 (2 pointers)
function intersect1(nums1, nums2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      result.push(nums1[p1]);
      i++;
      j++;
    }
  }
  return result;
}
