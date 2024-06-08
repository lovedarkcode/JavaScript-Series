// singleton  - when we declare in the form of literals then singleton is not used
// object literals
//Object.create
let mysym = Symbol("key1")

let user = {
    [mysym]:"key1", //always use squarebracket for symbol
    name:"Aditya",
    age: 20,
    type:"developer",
    location:'Nagpur',
    email:"aditya@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
// console.log(user);
// console.log(user["email"]);

user.email = "abc@facebook.com"
//Object.freeze(user)
// console.log(user);

//functions
user.greeting = function(){
    console.log(`hello user, Welcome!,${this.name}`);
}
console.log(user.greeting());


