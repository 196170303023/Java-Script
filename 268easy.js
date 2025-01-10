// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// let temp = nums[0];
// let arr = []
// let index

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > temp) {
//         temp = nums[i];
//         arr.push(temp)
//         nums.indexOf(temp);
//         nums.splice(index, 1);
//     }
// }


// console.log(nums);
// console.log(arr);


//...........................................SOLUTION2.................................///


// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// let arr = [];

// while (nums.length > 0) {
//     let temp = nums[0];

//     // Find the largest value in the current `nums` array
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > temp) {
//             temp = nums[i];
//         }
//     }

//     // Store the largest value in `arr` and remove it from `nums`
//     arr.push(temp);
//     let index = nums.indexOf(temp);
//     nums.splice(index, 1);
// }

// console.log(nums); // This will be empty
// console.log(arr);  // This will contain the elements in descending order

// for (let i = 0 ; i < arr.length ; i++){
//     if(arr[i] !== arr[i+1]-1){
//         console.log(arr[i]-1);
//         return arr[i]-1
//         break
        
        
//     }
// }



//..............................................    SOULTION 2 .................................//


// let arr = [1,2,4,5]

// let hash = []
// let missingNumber = -1

// for(let i = 0 ; i < arr.length + 1 ; i++ ){
//     hash[i] = 0
// }

// for(let i = 0 ; i < arr.length ; i++){
//     hash[arr[i]] = 1
// }
// for(let i = 1 ; i < hash.length ; i++){
//     if(hash[i] === 0 ){
//         missingNumber = i
        
        
//     }
    
// }

// console.log(missingNumber);



//........................................SOLUTION 3 ............................/


// let arr = [1,2,4,5]
// let n = arr.length + 1
// let sum = ( n * (n + 1 ) ) / 2
// let sum2 = 0 

// for(let i = 0 ; i < arr.length ; i++){
//     sum2 += arr[i]
// }

// console.log(sum-sum2);

