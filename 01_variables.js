//in java script you can change a variable's type in runtime.
//you can change the type of an variable for example if you created a string variable  later you can store an array, objects. it is called dynamic typed language.

// basically we does not need to mention the data type of the value to declare it.


//var is globle scoped variable while let and const is block scoped variable 
//the value of var variable will remain same across the whole code.
// var can be update and re declared within its scope 

{  var a = 10;
   var b = "krish";
   var b = 58;
   var c = 10.89;
   var d = null;
}
 //with the help of let variable you can make block scoped variable.
 //we can update the value of let variable but we cant redeclare the let variable.


let a = 40 ; 
let b = 10 ; 
    b= 500 ;
let c = 20 ; 
let d = 70 ; 
{
    let b = "krish";
    console.log(b);
}
console.log(b);


// with the const  we cant update and redeclare the variable.
// through the whole code the value of const variable remains constant 


const k = "krish";

// var variable are initialized with undefined whereas let and const variable are not initialized
// const must be initilized during declaration inlike var and let. 

// this is not allowed in js (const k;)