//we use loop to perform repeated action for rxample if you are designed a task of printing numbers from 1 to 100 it will be very hectic to do ot manually 
//loops help us automate such tasks.

//for loop
let sum =0 
let n = 4
for(i=0;i<n;i++){
  sum = sum +(i+1)  
}
console.log("sum of first "+n+" natural number is "+sum)

let fact = 1
let v = 5
for(i=1;i<v;i++){
    fact = fact * (i)
}
console.log("factorial of first "+n+" natural number is "+fact)


//for in loop 

let marks = {
    krish: 100,
    jude: 12,
    pedri: 13,
    gavi: 15,
    saka :16

}
for(let b in marks){
    if(marks[b]>99){
        console.log(b+" is a good boy")
    }else{
        console.log(b+" is bad boy")
    }
   
}


//for of loop

let people = ["10","20","30","30","40","59","30","60"]
for(const number of people){
     console.log(number)
     
}
//if you use for in it will return the index number of the array
//if you use for of it will return the values of the array 

