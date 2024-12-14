//original string never get manuplate or we can change anything in it , compiler returns a new strings with all the change you have made or all the function you have performed on the string

//length of a string
let name = `kRiSh bHaI`
console.log(name.length)
//ESQ does not occupie any extra space in string

//upper and lower case
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//slice 
//this function cut the string using index number + we have to entre arguments(index numbers) to this function
console.log(name.slice(2,4))//it take charater from index number 2 to 4 (4 is not included) and print those characters

// if we entre single index number into the function then it prints the rest of the part after that index number
console.log(name.slice(1))

//replace 
//this function replace a part of the string with another word or letter 
console.log(name.replace("bHaI","bHoVv"))

//concat
//this function is generally used to join the string with multiple other string

let friend1= "krish"
let friend2= "harsh"
let friend3= "nihit"

console.log(friend1.concat(" is a friend of ",friend2 +" and "+ friend3 ))

//trim
//this function trims the particular letter or word from the string

let d = "      krish      "
console.log(d.trim())
console.log(d)//without trim string prints wit spaces 

//()brackets contains the elements which needs to be removed in this case the bracket is empty so it will remove the empty spaces from the string

//String are immutable in order to access the character at an index we can use the following syntax

let r = "harshvardhan barai"
console.log(r[7])
console.log(r[5])
console.log(r[8])
console.log(r[4])
console.log(r[2])
console.log(r[6])
console.log(r[9])

//\t is used to make a gap between the string 
let t = 'harshvardhan\tbarai'
console.log(t)

//print a string using the forloop

let nname = "harshvardhan barai"
let n = nname.length
let i = 0
for(i=0;i<=n;i++){
    console.log(nname[i])
}

