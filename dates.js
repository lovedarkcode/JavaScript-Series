let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);  //object

let mycreatedDate = new Date(2023,0,23)
// console.log(mycreatedDate.toDateString());

let mydates = new Date("2023-01-12")
// console.log(mydates.toLocaleString());
// console.log(mydates.getTime());


let mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getFullYear());

newDate.toLocaleDateString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
    })
console.log(newDate.toLocaleDateString());

