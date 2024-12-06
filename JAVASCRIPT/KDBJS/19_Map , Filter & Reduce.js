//Map() this method create a new array by performing some operation on each array element it is same as for each loop the onlt change is map returns a new array while for each loop modifies the existing array 
/*
genrally .map method has 3 arguments
1>value (the values present in the the array)
2>index (the index number of the array)
3>array (the entire array) 
*/
let arr = [45,78,54,43,23]
let arrmap = arr.map((value,index,array)=>{
    console.log(value,index,array)
    //this line of code return the each value its index number and entire number for arr.length time 
    return value + index
 })
console.log(arrmap)


//  .filter() this methods filter an array with the values that passes a test . creates a new array  

let arr2 = [43,5,6,7,23,6,97,21,34,56,75]
let a2 = arr2.filter((value)=>{
    return value>20 
})
console.log(a2)

// .reduce() 

//The reduce() method executes a reducer function for array element.
//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not execute the function for empty array elements.
//The reduce() method does not change the original array.

let arr3 = [1,2,3,4,5,6,7,8,9,0]
let reducedarr3 = arr3.reduce((a,b)=>{
    return a + b
})
console.log(reducedarr3)
//we can insert another function inside reduce function  
const reduce_function = (a,b) => {
    return a + b
}
let arr4 = arr.reduce(reduce_function)
console.log(arr4)


