// 1. let and const variable
const wife = 'ema watson'
const hubby = 'Kamrul Hasan';
let phone = 'iphone 15';
phone = 'Samsung Galaxy s17';

// 2. default parameter
// 5. spread operator
function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest)

// 3. template string
const myNotes = `I am husband of ${wife} . I don't have a girlfriend. I have a ${phone}`;
console.log(myNotes);

// 4. arrow function
const square = x => x * x;
console.log(square(8));