//1
let a = 12
//console.log("age", a>10 && a<20? "is between 10 & 20":"is not between10 & 20" )
//||
if(a>10 && a<20){
    console.log( a ,"age is between 10 and 20")
}else{
    console.log(a,"age is not between 10 & 20")
}
//2

let b =2
switch(b){
    case(1):console.log("first")
    break;
    case(2):console.log("second")
    break;
    case(3):console.log("third")
    break;
    case(4):console.log("forth")
    break;

    default:console.log("infinite value")
}
//3

let c = 9
if(c%2== 0 && c%3 == 0){
    console.log("divisiable by 2 and 3 ")
}else{
    console.log("not divisiable by 2 and 3 ")
}

//4 

let f = 6
if(f%2==0){
    console.log("divisiable by 2")
}else if(f%3==0) {
    console.log("divisiable by 3 ")
}else{
    console.log("xyz")
}
//5
let age =19
console.log("you can", age>18? "drive":"not drive")
