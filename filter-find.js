/* const numbers = [3, 5, 6, 76, 34, 63, 45, 62];

// find big numbers using filter
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);

// find small numbers using filter
const smallNumbers = numbers.filter(number => number < 20);
console.log(smallNumbers); */

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }

];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const blacks = products.filter(product => product.color == 'black');
console.log(blacks);

const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);

