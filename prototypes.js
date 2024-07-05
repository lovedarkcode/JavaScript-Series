//js is a prototypal behaviour language
//Array -> object -> null
//string -> object -> null
//function -> object -> null

// const newHero = ['hulk','spiderman']
// console.log(newHero);

// function multiplyby5(num){
//     return num * 5;
// }

// multiplyby5.power = 2
// console.log(multiplyby5.power);
// console.log(multiplyby5(5));
// console.log(multiplyby5.prototype);

// function createuser(username,score){
//     this.username = username;   //this keywords helps to set current context
//     this.score = score;
// }

// createuser.prototype.increment = function(){
//     this.score++
// }
// createuser.prototype.printme = function(){
//     console.log(`score is ${this.score}`);
// }
// const chai = new createuser("chai",25)
// const tea = createuser("tea",250)

// chai.printme()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

//prototype section

// let myHeros = ['thor','spiderman']
// let heropower = {
//     thor:"hammer",
//     spiderman:"web",

//     getSpiderPower: function(){
//         console.log(`spiderman power is ${this.spiderman}`);

//     }
// }
// Object.prototype.Aditya = function(){
//     console.log(`aditya is present in all objects`);
// }

// Array.prototype.heyAditya = function(){
//     console.log(`Aditya says hello`);
// }
// heropower.Aditya()
// myHeros.Aditya()
// myHeros.heyAditya()
// heropower.heyAditya()

//inheritance
const user = {
    name:"coffee",
    email:"abc@gmail.com"
}
const teacher = {
    makevideo: true
}
const teachingsupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:teachingsupport
}
teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teacher,teachingsupport)

let anotherUsername = "chaiaurcoffee    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
console.log(anotherUsername.trueLength());

"aditya".trueLength()
"IceTea".trueLength()