// declare variable based on the name of an object property

const myObject = {x: 2, y: 50, z: 600, a: 25, b: 68};
const {x, b} = myObject;
// console.log(myObject?.p?.q); // optional chaining


// destructuring array
const [p, q] = [45, 37, 34, 53, 63, 23];
// console.log(p, q);


const [best, bad] = [34, 53];
// console.log(best, bad);

const [best1, bad1] = ['fahim', 'hasibul'];
// console.log(best1, bad1);

const {sky, color, money} = {sky: "blue", soil: 'mati', color: 'red', money: 500};

// chaining
const company = {name: 'GP', ceo: {id: 1, name: 'ajmol', food: 'fuchka'},
web:
 {work: 'website development',
  employee: 22,
   framework: 'react',
    tech:{
        first: 'html',
         second: 'css',
         third: 'js'
        }
    },

};

// optional chaining
console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);

