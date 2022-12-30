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

 
Follow up: Could you solve it without converting the integer to a string?

*/

// without built-in array methods
function isPalindrome(x) {
  if (x < 0) return false;
  x = String(x);
  let reverseX = "";
  for (let i = x.length - 1; i >= 0; i--) {
    reverseX += x[i];
  }
  return parseInt(reverseX) === x;
}

// with built-in array methods
function isPalindrome(x) {
  if (x < 0) return false;
  let newX = String(x).split("").reverse().join("");
  return parseInt(newX) === x;
}

// Without converting the integer to string
function isPalindrome(x) {
  if (x < 0) return false;
  let reverseX = 0;
  let num = x;
  while (x > 0) {
    reverseX = reverseX * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reverseX === num;
}

console.log(isPalindrome(124));
console.log(isPalindrome(121));
console.log(isPalindrome(10));
