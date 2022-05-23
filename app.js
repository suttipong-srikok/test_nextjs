const fruits = ['Apple', 'Banana', 'Strawberry'];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, 'Mango', 'Cherry');
console.log(fruits); // ['Apple', 'Mango', 'Cherry']
console.log(removedItems); // ['Banana', 'Strawberry]
