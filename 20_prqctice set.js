//create a arary of numbers and take input from the user to add number to this array
/*
let arr = [1,3,24,32,1,2,46,56,63]
let a = prompt("Entre the number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)
*/
// keep adding the number to the array until 0 is added to the array 
/*
let arr2 = [1,2,3]
let b
do{
    b = prompt("Entre the number")
    b = Number.parseInt(b)
    arr2.push(b)
}while(b!=0)
    console.log(arr2)
*/
// filter the numbers divisible by 10 from a given array 

let arr3 = [23,10,54,64,60,230,33,5,6,40]

let a = arr3.filter((a)=>{
    return a % 10 == 0
})
console.log(a)

// create an array of square of given number

let arr4 = [1,2,3,4,5,6,7,8,9,0]
let squarr = arr4.map((a)=>{
    return a = a*a
})
console.log(squarr)

// use reduce to calculate factorial of a  given number from an array of first n natural number.

let arr5 = [2,5,1,-1,6,8,-6,-8,8,3,2,4,-7]
let nauarr = arr5.filter((a)=>{
    return a >=0
})
console.log(nauarr)
let factorial = nauarr.reduce((a,b)=>{
    return a*b
})
console.log(factorial)