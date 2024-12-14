//problem no 1
//   \"" is used to add single or double quuote betwwen the string
//problem no 2
const senstance = `hello my name is krish bhuva pursuing the B Tech in computer science enginnering at parul university`

const word = `computer`
console.log(senstance.includes(word))

console.log(`the word ${word} ${senstance.includes(word)? 'is':'is not'} in the senstance`)

// starts with and ends with 
//starts with return true if particular string  starts with a string or else it will return false 
let senst = `java in the most secure coding language`
console.log(senst.startsWith("java"))
console.log(senst.startsWith("python"))
//starts with return true if particular string  end with a string or else it will return false 
console.log(senst.endsWith("language"))
console.log(senst.endsWith("program"))

//problem no 3 convert a string to lower case
let str = "MY NAME IS KRISH BHUVA"
console.log(str.toLowerCase())

//problem no 4
//extrect the number(amount) from the string and convert datatype into number 

let strin = "the prize od iphone 13 is 53000"
let amount = strin.slice("the prize od iphone 13 is ".length)
amount = Number.parseInt(amount)
console.log(amount)
console.log(typeof(amount))

// replace the 4th character of the string 
//it is not possible cuzz the strings are immutable all though we can replace the 4th character of the string and store it into new string 
let char = `fullstackwedevepelopmennt`
console.log(char.replace("l","ll"))

