// .sort() this methos is used to sort an array alphabetically
// this method changes the original array 
let friends = ["zeeshan","kaif","kavita","harsh","nishit","jay","yatri"]
friends.sort()
console.log(friends)

//example 2 
let number1 = [1,444,53,68,2,2224,5,67,77,9,00,2356,2,1234,99]
let number2 = [1,444,53,68,2,2224,5,67,77,9,00,2356,2,1234,99]
number1.sort()
console.log(number1)
//the output of number will be not like smallest number will come first 
// it will in alphabetical order 

// we also can custom our sorting functing 
// sorting functing can able to take another pre define function using which we can sort or array accordinly

function descending(a,b){
    return b-a
}//this user defined function sort your array in descending order
function ascending(a,b){
    return a-b
}//this user define function sort youe array in ascending order
number1.sort(descending)
number2.sort(ascending)
console.log(number1)
console.log(number2)

// .reverse this method reverse the entire array 
let number3= [1,444,53,68,2,2224,5,67,77,9,00,2356,2,1234,99]
console.log(number3.reverse())

// splice and slice 
/* 
.splice() this method is used to add new item to an array 
the splice method takes 3 argument as an input 
1> staring index number 
2> number of elements you want to delete from staring index number
3> values you wants to add in the array
*/

let number4 = [1,444,53,68,2,2224,5,67,77,9,00,2356,2,1234,99]
let deletedvalues = number4.splice(2,4,1000,1001,1002,1003,1004,1005,1006)
number4.splice(2,4,1000,1001,1002,1003,1004,1005,1006)
// this statement returns deleted elements from the array 
console.log(number4)
console.log(deletedvalues)

//Even if you enter more values than you have entered in the second argument, it will still include them in the computation.

/* 
.slice() this method slice cut out a piece from the array 
this method does not change the original array 
we have to store the values in a new array 
*/
let number5 = [1,444,53,68,2,2224,5,67,77,9,00,2356,2,1234,99]
let fakenum5 = number5.slice(2,7)//index 2 will be includes || index 7 will not be includes    which means values (53,68,2,2224,5) will be removed 
console.log(fakenum5)

