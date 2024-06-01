let name = "abc"
let repoCount = 25
console.log(name + repoCount + 'Value');

//use backticks
// string interpolation

console.log(`hello my name is ${name} and my repo count is ${repoCount} `);
//using objects type
const gameName = new String("adityac")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const nextString = "  aditya  "
console.log(nextString);
console.log(nextString.trim());

const str = "hello my name is Aditya and I write code in JS"
console.log(str.split(" "));
console.log(str.split('-'));