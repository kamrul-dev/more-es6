
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friends => friends.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 1500, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }

];

const productName = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// products.map( product => console.log(product));
// console.log(productPrices);


// forEasch()
// It does not return anything 
// used when no return needed
products.forEach(product => console.log(product));