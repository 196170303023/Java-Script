//function is a block of code designed to perform a particular task.
//instead of repeating the same block of code we can just call the predefine function in which we have already declared the logic.

//syntax goes like this 
/*

function fun name(parameter1,parameter2,){
    return logic||code
}
in function parameter behave as local variable.

*/

//syntax to call a function is name of the functions(parameters on which you want to perform your function code or logic )

//exmaple
function pythagoras(a,b){
    return Math.round(a**2 + b**2)
    //math.round is function using wich you can round off decimal values      
}
let a = 4.7
let b = 5.6

console.log("length of hypo is ",pythagoras(a,b))

// there is a another method to declare a function in js known as arrow function 
//syntx goes like 

/*
function average = (parameter1,parameter2)=>{
    return logic||code
}
*/
const average = (x, y) => {
    return ((x + y) / 2)
}

let k = 29
let r = 34

console.log("average of k and r is ", average(k, r))

// we can alse declare a function which dont take values but still returns the output 

let hello=()=>{
    console.log("hello world")
}
hello()

//example

const helloo = () => {
    console.log("helooooo world")
    console.log("hi");
}

let v = helloo();
console.log(v);


