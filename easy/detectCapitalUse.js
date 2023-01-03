/* 
Easy

We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true

Example 2:

Input: word = "FlaG"
Output: false

 

Constraints:

    1 <= word.length <= 100
    word consists of lowercase and uppercase English letters.



 */

// first pass
function isAllCapital(str) {
  if (str.toUpperCase() === str) {
    return true;
  } else {
    return false;
  }
}

function checkCapitalization(str) {
  let firstChar = str[0];
  let otherChar = str.slice(1);
  if (
    (firstChar.toUpperCase() === firstChar &&
      otherChar.toLowerCase() === otherChar) ||
    str.toLowerCase() === str
  ) {
    return true;
  }
  return false;
}

/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
  if (checkCapitalization(word) || isAllCapital(word)) {
    return true;
  }
  return false;
}

//compact

function detectCapitalUse(word) {
  return (
    word === word.toUpperCase() ||
    word === word[0] + word.substr(1).toLowerCase()
  );
}

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("olopa"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("Google"));
