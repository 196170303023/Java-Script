//1
//with for in loop
let studentsmarks = {
    krish : 90 ,
    harsh : 56 ,
    nishit : 76 
}
for(key in studentsmarks){
    console.log("the marks of " + key + " are " + studentsmarks[key])
}
// with for loop 
for(i=0;i<Object.keys(studentsmarks).length;i++){
    console.log("the marks of " + Object.keys(studentsmarks)[i] +" are " + studentsmarks[Object.keys(studentsmarks)[i]])
}
//2
/*let a = 2
let b 
while(b!=a){
    i = prompt("entre the correct number")
    alert("try again")
}
alert("you have entred the correct number")
*/
//3


const mean=(a,b,c,d,e) =>{
    return ((a+b+c+d+e)/5)
}
let a = 10
let b = 20
let c =5
let d =7
let e =56

console.log("the mean of all 5 number is " + mean(a,b,c,d,e))