const numbers = [4, 6, 8 ,10];
const output2 = [];

/* function doubleOld(number){
    return number * 2;
} */

const doubleIt = number => number * 2;


for(const number of numbers){
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);

// 1. loop through each element
// 2. call function by each element
// 3. result push in a new array

//===================================

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x*2);
// console.log(output);


const squares = numbers.map(x => x * x);
console.log(squares);