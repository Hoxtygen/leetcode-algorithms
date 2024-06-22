/* 
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm". 

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 

Constraints:

1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 
*/

/**
 * @param {string[]} words
 * @return {string[]}
 *
 * @author Wasiu Idowu
 */
function findWords(words) {
  const topRow = new Set("qwertyuiop");
  const middleRow = new Set("asdfghjkl");
  const bottomRow = new Set("zxcvbnm");
  let result = [];
  for (const word of words) {
    if (
      containWord(topRow, word) ||
      containWord(middleRow, word) ||
      containWord(bottomRow, word)
    ) {
      result.push(word);
    }
  }
  return result;
}

function containWord(keyboardRow, word) {
  for (const character of word) {
    if (!keyboardRow.has(character.toLowerCase())) {
      return false;
    }
  }
  return true;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
console.log(findWords(["adsdf","sfd"]))