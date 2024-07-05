// const promiseone = new Promise(((resolve,reject)=>{
//     //do an async task like db calls,cryptography task, network call
//     setTimeout(()=>{
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// }))

// promiseone.then(()=>{
//     console.log("Promise is resolved")
// })
//another method
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async 2 task is complete");
//         resolve()
//     },1000)
   
// }).then(()=>{
//     console.log("async 2 is resolved");
// })

// const promisethree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"aditya",emial:"xyz@google.com"})
//     },1000)

// })
// promisethree.then((user)=>{
//     console.log(user);

// })

// const promisefour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if (!error) {
//             resolve({username:"aditya",passwod:"xyz@google.com"})
//         }else{
//             reject("error")
//         }
//     },1000)
// })
//  promisefour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("finally the promise is resolve or rejected");
// })

promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username:"js",passwod:"xyz@google.com"})
            
        }else{
            reject("error")
        }
    },1000)
})

async function comsumepromisefive(){
    try {
        console.log(Response);
    } catch (error) {
        console.log(error);
    }
}
comsumepromisefive()