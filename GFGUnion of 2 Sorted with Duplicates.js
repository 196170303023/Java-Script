let a = [1,2,3,4,5]
let b = [1,2,3,6,7]
let temp = [...a,...b]

for(let i = 0 ; i < temp.length ; i++){
    for(let j = a.length ; j < temp.length ; j++){
        if(temp[i] === temp[j] ){
            temp.splice(j,1)
            
        }
    }
}

console.log(temp);

