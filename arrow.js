const user  = {
    username:"adbc",
    price:799,
    WelcomeMessage:function(){
    //     console.log(`${this.username} , welcome to website`); //this keyword is used for current contest
    //     console.log(this);
    // }
}

// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()
//console.log(this);  //here this is refering a empty object


// function chai(){
//     let username = "aditya"
//     console.log(this.username);
// }
// chai()

//using arrow function

// const chai = () => {
//     let username = "aditya"
//     console.log(this);
// }
// chai()

// let addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(addtwo(3,6));

//implicit function
const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(4,5));