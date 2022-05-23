const fruits = ['Apple', 'Banana'];

// The index of an array's first element is always 0.
let f1 = fruits[0]; // Apple
console.log(f1);

// The index of an array's second element is always 1.
f1 = fruits[1]; //Banana
console.log(f1);

// The index of an array's last element is always 
// one less than the length of the array
f1 = fruits[fruits.length - 1]; // Banana
console.log(f1);

// Using a index number larger than the array's length return 'undefined'.
f1 = fruits[99]; // undefined
console.log(f1);
