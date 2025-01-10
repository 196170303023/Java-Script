// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


//...............................SOLUTION..................................



// let arr = [0,1,3,0,7,0]
// let temp = []

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]!==0){
//         temp.push(arr[i])
//     }
// }

// for(let i = 0 ; i < arr.length ; i++){
//     arr[i] = 0
// }

// for(let i = 0 ; i <temp.length ; i ++){
//     arr[i] = temp[i]
// }

// console.log(arr);


let nums = [0,1,3,0,7,0]
let temp = []

for(let i = 0 ; i < nums.length ; i++){
    if(nums[i] != 0 ){
        temp.push(nums[i])
    }
}

for(let i = 0 ; i < nums.length ; i++){
    nums[i] = 0
}

for(let i = 0 ; i < temp.length ; i++){
    nums.push(temp[i])
}

console.log(nums);
