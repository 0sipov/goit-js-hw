'use strict';
const freinds = ['Mango', 'Poly', 'Ajax', 'Jay'];
const getItemsString = function (list) {
  let item;
  let result = '';
  for (let i = 0; i < list.length; i += 1) {
    item = `${i + 1} - ${list[i]}`;
    result += item + '\n';
  }
  return result;
};

console.log(getItemsString(freinds));
