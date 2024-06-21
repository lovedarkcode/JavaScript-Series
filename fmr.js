//Filter Map & Reduce functions

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums =  myNums.filter((num)=>{      //if we open the curlybraces we need to return scope
//    return num > 4
// })

// differnet method
// let newNums = []
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter((bk)=>bk.genre === 'History')
//   //console.log(userBooks);

//   const userBooks2 = books.filter((bk)=>bk.edition >= 2000 && bk.genre === "History")
//   console.log(userBooks2);

let myNumbers = [1,2,3,4,5,6,7,8]
// const newNums = myNumbers.map((num)=>num + 10)
// console.log(newNums);

//chaining

// const newNums = myNumbers
//                 .map((num)=> num*10)
//                 .map((num)=> num+1)
//                 .filter((num)=> num>=50)


// console.log(newNums);


//Reduce

let myNums = [1,2,3,4,5]

// let mytotal =  myNums.reduce(function (acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc + curval
// },2)


let mytotal = myNums.reduce((acc,curval) => acc+curval ,2)

//console.log(mytotal);


let shoppingcart = [
    {itemName : 'js course',
        price:2999
    },
    {itemName : 'c course',
        price:2111
    },
    {itemName : 'python course',
        price:2499
    },
    {itemName : 'java course',
        price:2699
    }
]

let pricepay = shoppingcart.reduce((acc,item) =>acc + item.price, 0)
console.log(pricepay);




