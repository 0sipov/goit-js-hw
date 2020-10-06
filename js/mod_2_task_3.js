'use strict';
function findLongestWord(string = '') {
  let stringWords = string.split(' ');
  let longestWord = '';
  for (let stringWord of stringWords) {
    if (stringWord.length > longestWord.length) {
      longestWord = stringWord;
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
