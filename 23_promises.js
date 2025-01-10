// const promiseOne = new Promise(function(resolve, reject){
//     // do asynchronous task 
//     //DBcalls, cryptography, network

//     setTimeout(function(){
//         console.log("async task completed");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(result){
//     console.log("promise consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log(" async task 2 completed");
//         resolve()
//     },2000)
// })

// .then(function(){
//     console.log(" promise 2 consumed");
// })





// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({Username: "krish", Email:"krish@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({Username: "krish", Email: "krish@gmail.com", Password: "1234567"})
//         }else{
//             reject('SomeThing Went Wrong')
//         }
//         resolve()
//     },2000)
// })

// promiseFour
// .then(function(user){
//     console.log(user.Username);
//     return user.Username 
// })
// .then((username)=>{
//     console.log(username); 
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(function(){
//     console.log("finally the promise is either resolved or rejected");
// })


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({Username: "happy", Email: "happy@gmail.com", Password: "1234567"})
//         }else{
//             reject('ERROR: Js Went Wrong')
//         }
//         resolve()
//     },2000)
// })

// async function consumePromiseFive(){
//     try{
//         const respose = await promiseFive
//         console.log(respose);
//     }catch(err){
//         console.log(err);
//     }    
// }
// consumePromiseFive()


// async function getAllUsers(){
// try{
//     const respone = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const data =await respone.json()
//     console.log(data);
// }catch(err){
//     console.log(err);
// }
// }

// getAllUsers()



// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((responce)=>{
//     return responce.json()
// })
// .then((responce)=>{
//     console.log(responce);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })
// .finally()
