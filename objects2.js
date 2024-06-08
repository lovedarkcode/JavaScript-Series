// const fbuser = new Object()
// fbuser.id = "123abc"
// fbuser.name = "John Doe"
// fbuser.isLoggedIn = false
// console.log(fbuser);

const regularuser = {
    email:"some@gmail.com",
    fullname:{userfullname:{firstname:"Aditya",lastname:"Upaganlawar"}}

}

// console.log(regularuser.fullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
const obj3 = {...obj1,...obj2} //spread operator
// console.log(obj3);

const course ={
    coursename:"next level",
    price:"999",
    courseinstruct:"Abc"
}

const {courseinstruct} =course
console.log(courseinstruct);

