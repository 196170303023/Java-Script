/*
arrays are variables which can hold more than one value.
in single array to can put some nnumbers, some booleans , some objects etc.
basically it is collection of items which you can access with help of indexes.
arrays are mutable arrays can be changed.
*/

let fruit = ["apple","banana","pineapple","strawberry"]
console.log(fruit)
//if you want a particular value of an array this is how you can get the value you just need to entre the index number of that particular array in the square brackets
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])
console.log(fruit[4])// the output will be undefined cuzz index 4 is not exits 

let mix = [1,2,3,4,"abc","bcd","cdf",false,true,]
//javascript allow you to  store the diffrent type of value in a single array
// using .lenght property we can find out the numbers of the element present in the array and it does not starts with 0 
console.log(fruit.length)
console.log(mix.length)
//syntax for adding and changing of a value in an array goes like this 
let name = ["harsh","nishit"]
name[2]="krish"//addind the new value
name[0]="dhruv"//changing the existing
console.log(name)

// in java script arrays are objects the type of operator on array return object

let n =[1,2,3,4,5,6]
console.log(typeof(n))

// quick question print the values of an array using for loop

let ques = ["messi","neymar","musiala","de jong","jude","suraze","ronaldinho","hazard","kdb"]
for(i=0;i<ques.length;i++){
    console.log(ques[i])
}



