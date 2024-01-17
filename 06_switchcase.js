// if else and switchcase are kind of similar
// for switch the syntax goes like this 

/*switch(expression){
    case condition 1 ; statement(s)
    break;
    case condition 2 ; statement(s)
    break;
    case condition 3 ; statement(s)
    break;
   

    default:statement(s)
}*/

let month = 9


switch(month){
    case(1):console.log("jan")
    break;
    case(2):console.log("feb")
    break;
    case(3):console.log("mar")
    break;
    case(4):console.log("apr")
    break;
    case(5):console.log("may")
    break;
    case(6):console.log("jun")
    break;
    case(7):console.log("jul")
    break;
    case(8):console.log("aug")
    break;
    case(9):console.log("sep")
    break;
    case(10):console.log("oct")
    break;
    case(11):console.log("nov")
    break;
    case(12):console.log("dec")
    break;

    default:console.log("entre valid number")
}

//ternary operator 
/*evaluates a condition and excutes a block of code based on the condition 

synatx goes like condition expression1:expression2
*/
var a = 18
console.log("you can", a>=18? "drive" : "not drive")
