// // // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89];

// // // for (const i of array){
// // //     console.log(i);
// // // }

// // // const greeting = "Hello world"

// // // for (const i of greeting){
// // //     // if(i==" "){
// // //     //     continue
// // //     // }
// // //     console.log(`char is ${i}`);   
// // // }

// // // const heros = ["spiderman", "superman", "batman", "ironman"]


// // // const nameHeron = heros.forEach((element) => {
// // //     console.log(element);
// // //     return element ;
    
// // // });

// // // console.log(nameHeron);

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

// // // // const num = arr.filter((item)=>(item >= 10))

// // // // const num = arr.filter((item)=>{
// // // //     return item >= 10 ;
// // // // })

// // // const num =[]
// // // arr.forEach(function(item){
// // //     if (item >= 10) {
// // //         num.push(item)
// // //     }
// // // })

// // // console.log(num);

// // // const app =[
// // //     {
// // //     name: "krish",
// // //     age:10   
// // //     },
// // //     {
// // //     name: "harsh",
// // //     age:17   
// // //     },
// // //     {
// // //     name: "nishit",
// // //     age:13   
// // //     },
// // //     {
// // //     name: "sahil",
// // //     age:14   
// // //     }
// // // ]

// // // app.forEach((item)=>{
// // //     console.log(item.name)
// // // })

// // const nums = arr
// //                 .map((item)=>{
// //                     return item * 10
// //                 })
// //                 .map((item)=>{
// //                     return item + 2
// //                 })
// //                 .filter((item)=>{
// //                     return item > 10
// //                 })

// // console.log(nums);


// const val = [1, 2, 3, 4, 5]

// // const totalVal = val.reduce(function(acc,currval) {
// //     return acc + currval ;
// // },10)

// // console.log(totalVal);

// const totalVal = val.reduce((acc, currval) => (console.log(`acc:${acc}  :  currentvalue:${currval}`), acc + currval),
//     10
// );

// console.log(totalVal);


// // const val = [1, 2, 3, 4, 5];

// // const totalVal = val.reduce((acc, currval) => {
// //     console.log(`acc:${acc}  :  currentvalue:${currval}`);
// //     return acc + currval;
// // }, 10);

// // console.log(totalVal);


const cource = [
    {
        id: 1,
        name: 'JavaScript',
        price: 100,
        quantity: 5,    
    },
    {
        id: 2,
        name: 'Python',
        price: 150,
        quantity: 3,
    },
    {
        id: 3,
        name: 'Java',
        price: 200,
        quantity: 7,
    },
    {
        id: 4,
        name: 'C#',
        price: 120,
        quantity: 10,
    }
]

const totalPrice = cource.reduce ( (acc,currentvalue) => {
    return acc + currentvalue.price
},0)

console.log(totalPrice);
