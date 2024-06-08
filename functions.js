
function name(){
// console.log("a");
// console.log("b");
// console.log("c");
}
name //reference
name() //execution

// function add(num1,num2){
//     console.log((num1 + num2)); //parameters
// }
// add(3,7)  //arguments

function add(num1,num2){
    let result  =num1+num2 //parameters
    return result   //once return function doesn't work
}
 let result = add(5,7)
//  console.log("Result:",result);

function loginmessage (username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`

}
   console.log(loginmessage("Hello world!"))
   console.log(loginmessage()); //if I don't pass any values


   function calculatecartprice(...num1){  //reset and spread operator
    return num1

   }
   //console.log(calculatecartprice(200, 900,800));

   const user = {
    username:"Aditya",
    price:900
   }
   function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

   }
   //handleobject(user)

   handleobject({
    username:"abc",
    price:900
   })

   const mynewarray = [200,600,800,400]
   function returnSecondValue(getArray){
    return getArray[2]
   }
   console.log(returnSecondValue(mynewarray));


