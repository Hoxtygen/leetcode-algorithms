/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/

/**
 * @param {string} s
 * @return {string}
 */

var reverseString1 = function (s) {
	let start = 0;
	let end = s.length - 1;
	while (start < end) {
	  [s[start], s[end]] = [s[end], s[start]];
	  start++;
	  end--;
	}
	return s;
  };
  var reverseWords = function (s) {
	const words = s.split(" ");
	const result = [];
	for (let i = 0; i < words.length; i++) {
	  const rev = reverseString1(words[i].split("")).join("");
	  result.push(rev);
	}
	return result.join(" ");
  };
  
  console.log(reverseWords("Let's take LeetCode contest"));
  console.log(reverseWords("God Ding"));