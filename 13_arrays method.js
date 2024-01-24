// there are some methods using which we can manipulate the values of an array

//  .toString() using this methid we can convert the value into string 

let num = [1,2,3,4,5,6,7,8,9,0]
let a = num.toString()
console.log(a)
console.log(typeof(a))

// .join() this method joins all the array elements using a seperator

let b = num.join("-")
console.log(b)

// .pop() this method simply removes the last element of the array 

num.pop() // removes the 0 from the array 
let r = num.pop() //pop returns the popped element(9)
console.log(num)
console.log(r)

//  .push() this method simply add a new element at the end of an array
let num1 = [9,8,7,6,5,4,3,2,1,0]
num1.push(66)//add value 66 at the end of the array 
console.log((num1))
let t = num1.push()//push returns the new lenght of the array  
console.log(t)

//  .shift() this method removes the first element of the array and return it

let x = ['a','b','c','d','e','f']
x.shift()// removes a from the array 
console.log(x)

//  .unshift this method adds element to the beginning of the array and return new lenght of the array 

let y = ['a','b','c','d','e','f','g','h']
let z = y.unshift('A')//returns the lenght of the new array after element is being added
console.log(z)
console.log(y)

//  .delete using this method you can simply delete the particular index value 
// even after deleting the elements from the array , it will not effect the lenght of the array the lenght of the array will remain same.

let numm = [1,2,3,4,5,6,7,8,9,0]
console.log(numm.length)//lenght of the  array before removal of element(10)
delete numm[0]
console.log(numm)
console.log(numm.length)//lenght of the array after removal of element(10)

//  .concat() this method helps to join array to the given array 
let arr2 = [9,8,7,6,5,4]
let arr1 = [1,2,3,4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3)
// using concat you can join even more than 2 arrays
let arr4 = [3,6,7,8,3,7,7]
let arr6 = arr1.concat(arr2,arr3,arr4)
console.log(arr6)
