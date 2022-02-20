// Array map string
const friendSName = ['kamrul', 'hasan', 'babu', 'najmul', 'karim', 'rahim'];
const friendsLength = friendSName.map(friends => friends.length);
console.log('friends length: ', friendsLength);


// Array of Objects map
const products = [
    {name: 'shirt', price: 500, color: 'yellow', warranty: 'One years' },
    {name: 'clock', price: 1000, color: 'black', warranty: '5 years' },
    {name: 'phone', price: 50000, color: 'metalic', warranty: '2 years' },
    {name: 'belt', price: 300, color: 'blue', warranty: 'No warranty' },
    {name: 'bottle', price: 150, color: 'yellow', warranty: 'One years' }
];

const productsName = products.map(product => product.name);
console.log('product name: ', productsName);

const productsPrice = products.map(product => product.price);
console.log('product price: ', productsPrice);

// forEach
// It does not return anything 
// used when no return needed
products.forEach(product => console.log("used forEach(): ",product));
