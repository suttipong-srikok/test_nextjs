const fruits = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango'];
const start = 0;
const deleteCount = 3;
const removedItem = fruits.splice(start, deleteCount);
console.log(fruits); // ['Banana', 'Mango']
console.log(removedItem); // ['Apple', 'Strawberry', 'Cherry']
