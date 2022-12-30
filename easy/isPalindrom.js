/* 
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1

 

*/

// without built-in array methods
function isPalindrome(x) {
  if (x < 0) return false;
  if (x === 0) return true;
  x = String(x);
  let reverseX = "";
  for (let i = x.length - 1; i >= 0; i--) {
    reverseX += x[i];
  }
  return parseInt(reverseX) === x;
}

// with built-in functions
function isPalindrome(x) {
	if (x < 0) return false;
	if (x === 0) return true;
	let newX = String(x).split("").reverse().join("");
	return parseInt(newX) === x;
  }

console.log(isPalindrome(124));
console.log(isPalindrome(121));
console.log(isPalindrome(000));
console.log(isPalindrome(10));
console.log(isPalindrome(001000));



