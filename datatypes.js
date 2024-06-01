"use strict";   //treat all JS code as a newer version

// alert("hello")  we are using node.js,not browser

// let name = "Aditya"  //String
// let age = 30  //num
// let isLoggedIn = flase 

// primative data types
// number => 2 to the power 53
// bigInt => for long number
// string => ""
// boolean => true or false
// null => empty value
// undefined => not defined
// symbol => for uniqueness

// non-primative datatypes
// object

// console.log(typeof undefined);
// console.log(typeof null);

// *******************************************
//primative
// 7 types - string, num, boolean, null, undefined, symbol, bigint
//reference type - non-primative
//Array, objects, functions
// dynamic type language


const heros = ["abc","dsc","ghf"]
let myobj = {
    name:"Aditya",
    age:24,
    occupation:"developer"
}

 const myfunction = function(){
    console.log("hello wolrd!");
 }
//  *****************************************************************
// stack(primtive), heap(non-primative)

let name = "mynamecom"
let anothername = "chaitheme"

console.log(name);
console.log(anothername);

let userone = {
    email:"user@google.com",
    upi:"ybl@axis"
}
 let usertwo = userone        //here userone reference value has been passed to usertwo
 usertwo.email = "user@facebook.com"
 console.log(userone.email);
 console.log(usertwo.email);