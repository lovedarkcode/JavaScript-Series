const myarr = [0,1,2,3,4,5, true,"Aditya"]  //reseizeable in nature
console.log(myarr[6]);

const myarr2 = new Array(1,2,3,4)
console.log(myarr2[2]);

// Array methods

// myarr.push(6) //add
// myarr.pop()  //remove
// console.log(myarr);

// myarr.unshift(0)
// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(9));

// const newArr = myarr.join()
// console.log(newArr);
// console.log(myarr);
// console.log(typeof newArr);

// splice, slice
// splice manipulates original array whereas slice keeps your original array

console.log("A",myarr);
const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B",myarr);

const myn2 = myarr.splice(1,3)
console.log("C",myarr);
console.log(myn2);