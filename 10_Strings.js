//Strings
/* strings are used to store and manupilate text.
strings is created using double and single qoutes

there is function in java script to find the length of the string 
variable name.length
*/

let name = "krishbhuva"
console.log(name.length)
//space is also counted as a letter 

let a = "krish bhuva"
console.log(a[7])
//this is how you can print particular letter of a string in js

//template literals
//template literals in java scripts give you flexiable and maintainable way of working with strings
//template use backtics insted of double or single quotes to define a string 

let boy1 = 'krish'
let boy2 = 'nishit'

console.log(`${boy1} is friend of ${boy2}`)

//using template you can declare a variable inside the string using the syntx ${variable name} this is also know as string interpolation 
let nname = `my name is ${boy1}`
console.log(nname)

                        // escape squence characters 
// we use escape sequence characters to print single quote between a string 

//let fruit = 'pine'apple'
//console.log(fruit)
//this syntax may through error because compiler get confused where to end the string

// using \' between the string can print single quote between the string
//for example
let fruit = 'pine\'apple'
console.log(fruit)

//  /' consider as a single character in the string and does not accquire the extra space in the string
console.log(fruit.length)//10

// there are multiple types of ESC 

// \n this creates a new line characters after /n get print in new line
fruit = 'ban\nana'
console.log(fruit)

//\r It is a control character used to bring the cursor or printing position back to the beginning of the line.
fruit = "dragon\rFruit"
console.log(fruit)

//\t  this creates a tab between two words
fruit = 'oran\tage'
console.log(fruit)


    



