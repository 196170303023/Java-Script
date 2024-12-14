/*sometime we might have to execute a block of code based on some condition.
 ex:- display a message for the people whose age is greater than 18 

 
*/
let a = prompt("entre your age")//prompt is a function which only runs on back end of the server (inspect) prompt is use to take info from the user 
//it lways return output in string
a = Number.parseInt(a)//it converts a string into integer value
if(a>0){
    alert("your are a human being ")// it shows an pop up msg to user before entering any web page 
}else{
    alert("you are not a human being")
}

/*in js we have three form of if statement 
 1>if statement 
 2>if else statemet 
 3>if else if else */
 
 //if
 // the of statement evaluates the condition inside the () if the condition is evaluated to true , the code inside the body of if is executed else the code is not executed

 //else
 //the statement can have an optional else clause.
 // if the code is true  code inside if os executed else code inside else block is executed 
 
 //In JavaScript, else if is used to introduce a new condition to test if the previous condition(s) in the if statement is/are false.
 let b = prompt("entre your age")
 b = Number.parseInt(b)
 
 if(b>0 && b<5){
   alert("you are a kid")
 }else if(b>5 && b<15){
    alert("you are a teenager")
 }else if(b>15 && b<50){
    alert("you are adult")
 }else{
    alert("aged")
 }




 