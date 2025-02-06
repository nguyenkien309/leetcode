/**
 * Text Justification
 * https://leetcode.com/problems/text-justification/description/
 * Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
 * Output: ["This    is    an", "example  of text", "justification.  "]
 * words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
 * Output: ["What   must   be", "acknowledgment  ", "shall be        "]
 */

// Topics
// Companies
// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// words = ["What", "must", "be", "acknowledgment", "shall", "be"];
words = ["This", "is", "an", "example", "of", "text", "justification."];
maxWidth = 16;
// function fullJustify(words, maxWidth) {
//   const convertedWords = [];

//   let sum = 0;
//   let text = "";

//   for (let i = 0; i < words.length; i++) {
//     if (sum + words[i].length >= maxWidth) {
//       const whiteSpace = maxWidth - sum;
//       convertedWords.push(text.trim());
//       sum = 0;
//       text = "";
//     }

//     sum += words[i].length;

//     text += `${words[i]}` + " ";

//     if (words.length - 1 === i) {
//       convertedWords.push(text.trim());
//       sum = 0;
//       text = "";
//     }
//   }

//   console.log("convertedWords", convertedWords);
// }
function fullJustify(words, maxWidth) {
  const convertedWords = [];

  let sum = 0;
  let text = "";

  for (let i = 0; i < words.length; i++) {
    
  }

  console.log("convertedWords", convertedWords);
}

console.log(fullJustify(words, maxWidth));
