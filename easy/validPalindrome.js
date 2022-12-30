/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

put: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.


*/

// with built-in string and array methods
function isPalindrome(str) {
  str = str.replace(/[\W_]/gi, "").toLowerCase();
  const revStr = str.split("").reverse().join("");
  return str === revStr;
}


// with loop
function isPalindrome(str) {
  let newStr = str.replace(/[\W_]/gi, "").toLowerCase();
  let reverseString = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reverseString += newStr[i];
  }
  return reverseString === newStr;
}

console.log(isPalindrome("#Hello ^World' 123$%"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
