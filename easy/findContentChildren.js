/**
 * Assume you are an awesome parent and want to give your children some cookies.
 *  But, you should give each child at most one cookie.
 * Each child i has a greed factor g[i], which is the minimum size of a cookie
 * that the child will be content with; and each cookie j has a size
 * s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be
 *  content. Your goal is to maximize the number of your content children and output the maximum number.
 *
 * 
 * @example Input:  g = [1,2,3], s = [1,1]
 * Output: 1
 * Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
 * And even though you have 2 cookies, since their size is both 1, you could only 
 * make the child whose  greed factor is 1 content. You need to output 1.
 * 
 * @param {number[]} g
 * @param {number[]} s
 * @returns {number}
 *
 */

function findContentChildren(g, s) {
  let greedFactorPointer = 0;
  let cookieSizePointer = 0;
  let contentedChildren = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (greedFactorPointer < g.length && cookieSizePointer < s.length) {
    if (s[cookieSizePointer] >= g[greedFactorPointer]) {
      greedFactorPointer++;
      contentedChildren++;
    }
    cookieSizePointer++;
  }
  return contentedChildren;
}

console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2, 3], [3]));
console.log(findContentChildren([10, 9, 8, 7], [6, 6, 7, 8]));
