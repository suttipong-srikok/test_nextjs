const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango'];
const start = 1;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits); // ['Apple', 'Mango']
console.log(removedItems); // ['Banana', 'Strawberry']
