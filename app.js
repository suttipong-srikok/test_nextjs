const fruits = ['Apple', 'Banana'];

var b = fruits.includes('Banana'); 
console.log(b); // true

b = fruits.includes('Cherry');
console.log(b); // false

// If indexOf() doesn't return -1, the array contains the given item.
b = fruits.indexOf('Banana') !== -1;
console.log(b); // true;

b = fruits.indexOf('Cherry') !== -1;
console.log(b); // false
