// declate variable based on the name of and object property
const objectData = {a: 3, b: 2, c: 4, y: 45, g: 30};
const {a, b} = objectData;
console.log(a, b);

// optional chaining used for escaping whole program error and result for that element is undefined.
console.log(objectData.b.k?.y);

// destructuring array
const [s, t] = [2, 4, 5, 9, 23, 25];
console.log(s, t);
console.log(s + t);

const [good, bad] = ['kamrul', 'hasibul'];
console.log(good, bad);
console.log(good + ' ' + bad);
console.log("template string used: ", `${good} ${bad}`);  // used template string




//  (advanced) Array Destructuring, nested object Optional chaining

const food ={name: 'rice', color: 'white', price: 70, wieght: "1 kg" , 
milk:{
    milkColor: 'white', price: 100, litter: '1 L', 
        butter:{
            madewith: 'milk'
        }
        },
 };

 const {name, color, price} = food;
 console.log(name, color, price);

 const {milkColor, litter} = food.milk;
 console.log(milkColor, litter);

//  const {madewith} = food.milk.butter;
//  console.log(madewith);

 //optional chaining
console.log(food.milk.potato?.butter);

