/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/


/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
  if (strs.length === 1 || !strs[0]) {
    return strs[0] || "";
  }

  let i = 0;
  while (strs[0][i] && strs.every((str) => str[i] === strs[0][i])) {
    i++;
  }
  return strs[0].substr(0, i);
}

console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["flower", "flow", "floor"]));
console.log(longestCommonPrefix(["flower", "flow", "fight"]));
console.log(longestCommonPrefix(["flower"]));
