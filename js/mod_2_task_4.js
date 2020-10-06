'use strict';
function formatString(string, maxLength = 40) {
  if (string.length > maxLength) {
    let stringArray = string.split('');
    stringArray.splice(maxLength);
    return `${stringArray.join('')}...`;
  }
  return string;
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
