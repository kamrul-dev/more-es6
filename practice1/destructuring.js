/* 
// destructuring from object
const food = {name: 'rice', color: 'white', price: 70, wieght: "1 kg" };
const {name, color} = food;
console.log(name, color); */

// destructuring from array string
const friendsName = ['kamrul', 'hasan', 'fahim', 'babu'];
const [kamrul, hasan] = friendsName;
// console.log(kamrul);

// nested destructuring from object 
const food = {name: 'rice', color: 'white', price: 70, wieght: "1 kg" , milk:{
    milkColor: 'white', price: 100, litter: '1 L', butter: {madewith: 'milk'}},
 };

 const {milkColor, price, litter} = food.milk;
 console.log(milkColor, price, litter);

const {madewith} = food.milk.butter;
console.log(madewith);