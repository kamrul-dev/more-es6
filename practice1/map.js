

// double the array elements using loop
const numbers = [2, 5, 6, 9, 1, 12, 10];
const output = [];

for(const number of numbers){
    const result = number * 2;
    output.push(result);
}
console.log('using for loop without function: ',output);


//===============================================================

//double the array elements using arrow function
const numbers1 = [2, 5, 6, 9, 1, 12, 10];
const output1 = [];

const doubleNumber = number => number * 2;  // arrow function

for(const number of numbers1){
    const result1 = doubleNumber(number); // call the array element using function call
    output1.push(result1);
}
console.log('using for loop with arrow function: ', output1);


//===================================================================


// ========== call elemnets using map()  method ============//
// map() method work as a loop

const numbers2 = [3, 5, 6, 9, 1, 12, 3];


// using map method call the arrow function variable name
const doubleNumberMap = number => number * 2;
const outputMap = numbers2.map(doubleNumberMap);
console.log("using map method call the arrow function variable name", outputMap);


// using map method direct assign the parameter and return result inside the map() method 
const outputMap1 = numbers2.map(number => number * 2);
console.log("using map method direct assign the parameter and return result inside the map() method ",outputMap1)

// Square the numbers using map()
const squares = numbers2.map(x => x * x);
console.log('Square the numbers using map() :', squares);