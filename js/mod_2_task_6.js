'use strict';
let mapArray = function (array) {
  let numbers = new Array();
  for (let i = 0; i < array.length; i += 1) {
    numbers.push(array[i] * 10);
  }
  return numbers;
};
console.log(mapArray([1, 2, 3, 4, 5, 6, 7]));
