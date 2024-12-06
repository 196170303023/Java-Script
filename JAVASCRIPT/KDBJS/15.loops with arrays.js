//For each loop calls a function ,once for each array element 

let num = [1,2,3,4,5,6,7,8,9,0]

num.forEach((i)=>{
    console.log(i*i)
})

//Array.from this method is used to create an array from any other object 
// any such object whose array can be made we use that as array.from

let name = "ronaldinho"
let namearr = Array.from(name)
console.log(namearr)
//in this above code we converted this string into an array it takes each individual character from the string  and converts into single value and stores in the array  
console.log(typeof name)//string
console.log(typeof namearr)//object

// For of loop    it allows you to loop the array and get the value of each element 

for(let number of num){
    console.log(number)
}

// For in         it allows you to loop  the array an return the index number

for(let i in num){
    if(num[i]==9){
        console.log("number is nine")
    }else{
        console.log("number is invalid")
    }
}
