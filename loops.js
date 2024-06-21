// for loop
for (let i = 0; i <= 10; i++) {
    // console.log(i);

    if (i == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(i);
}

for(let i = 0;i<=10;i++){
    //console.log(`outer loop${i}`);
    for(let j=0;j<=10;j++){
        //console.log(`inner loop value${j} and inner loop${i}`);
        //console.log(i+"*"+j+"="+ i*j);
    }
}

// let myArray = ['abc','def','ghi','jkl']
// console.log(myArray.indexOf('abc'));
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log(`the number is detected`);
        //continue
    }
    //console.log(`value of i is ${index}`);
    
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log(`the number is detected`);
        //break
    }
    //console.log(`value of i is ${index}`);
}

//array specific loops
// for of

const arr = [12,23,45,67,78]
for (const val of arr) {
    //console.log(val);
}

const greetings = 'Hello world'

for (const iterator of greetings) {
    //console.log(iterator);
    
}

//maps these are known for unique values these are not iterable
const map = new Map()
map.set('IN',"India")
map.set('US',"United states")
map.set('FR',"France")

//console.log(map);
for (const [key,value] of map) {
    //console.log(key,"-",value);
    
}

const myobj = {
    'game1':"NFS",
    'game2':"GTA"
}
// // for (const [key,value] of myobj) {
// //     console.log(key,"-",value);
    
// }

const program = ['js','swift','ruby','python','c++','c']
for (const key in program) {
    //console.log(program[key]);
    
}

//for each  these are higher order functions

 const coding = ['js','swift','ruby','python','c++','c']
// coding.forEach( function (item){  //because it is a callback it don't have name
//     console.log(item);
// } )

// coding.forEach((item) =>{
//     console.log(item);
// })

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})

const mycoding = [
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },
    {
        languagename:"java",
        languagefilename:"java"
    }
]

mycoding.forEach((item)=>{
    //console.log(item.languagename);
})








