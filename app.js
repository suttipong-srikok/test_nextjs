// 'fruits' array created using array literal notation
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array('Apple', 'Banana');
console.log(fruits2.length);
// 2

// 'fruits3' array created using the String.prototype.split().
const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3.length);
// 2
