//while loop 
// if the condition never become false the loop will never end and this crash the runtime .
//synatx goes like this 

let index = 0 
while(index <= 100){
    console.log("value of index is",+index)
    index = index + 1
}

// in array 
let myarray = ["ronaldinho","iniesta","neymar","messi"]
let i =0
while(i<myarray.length){
    console.log("Goat is",myarray[i])
    i = i +1
}

//do while 
//do while loop must execute at least one time after that the number of times it execute is totally depend on the condition 
let score = 0
do{
    console.log("brace is ", score)
    score = score + 2
}while(score<18)
