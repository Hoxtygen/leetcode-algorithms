/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some
 * (can be none) of the characters without disturbing the relative positions of the remaining
 *  characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 * @author Wasiu Idowu
 */

function isSubsequence(s, t) {
	let i = 0;
	let j = 0;
	while (i < s.length && j < t.length) {
	  if (s[i] === t[j]) {
		i++;
		j++;
	  } else {
		j++;
	  }
	}
	return i === s.length;
  }
  
  console.log(isSubsequence("ace", "abcde")); 
  console.log(isSubsequence("aec", "abcde"));
  console.log(isSubsequence("abc", "abracadabra"));
  console.log(isSubsequence("cat", "concatenate"));
  console.log(isSubsequence("hello", "world"));
  console.log(isSubsequence("abc", "ahbgdc"));
  console.log(isSubsequence("axc", "ahbgdc"));