import  binarySearch  from './Binary.js';

let array = Array.from({ length: 999 - 10 + 1 }, (_, index) => index + 1);

console.time('executionTime');
console.log(binarySearch(array, 56));
console.timeEnd('executionTime');
