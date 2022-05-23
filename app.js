const fruits = ['Strawberry', 'Banana', 'Mango'];
const start = fruits.indexOf('Banana');
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits); // ['Strawberry', 'Mango']
console.log(removedItems); // ['Banana']
