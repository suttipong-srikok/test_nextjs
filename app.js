const fruits = ['Strawberry', 'Mango'];

// Create a copy using spread syntax
const fruitsCopy = [...fruits];
console.log(fruitsCopy); // ['Strawberry', 'Mango']

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruits);
console.log(fruitsCopy2); // ['Strawberry', 'Mango']

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();
console.log(fruitsCopy3); // ['Strawberry', 'Mango']
