//global scope 
let a = 300

if (true) {  //block scope
let a = 10
const b = 20
var c = 90
console.log("Inner:" a);
}

console.log(a);
console.log(b);
console.log(c);