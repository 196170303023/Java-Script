// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1



// let hash = new Array(arr.length).fill(0);

// let max = arr[0]
// let val = 0 

// for(let i = 0 ; i < arr.length ; i++){
//     max = Math.max(max, arr[i])
// }

// for(let i = 0 ; i < max ; i++){
//     hash[arr[i]]++
// }

// for(let i = 0 ; i < max ; i++){
//     if(hash[arr[i]] == 1){
//         val = arr[i]
//         break
//     }
// }


// console.log(val);


//...............................................solution 2 ...................................




// var singleNumber = function(nums) {
//     let hash = new Array(Math.max(...nums) + 1).fill(0); // Initialize hash with size of max value in nums
//     let maxVal = nums[0];
//     let output = 0;

//     // Find the maximum value in the array
// if(nums.length > 0)
//     {    for (let i = 0; i < nums.length; i++) {
//             maxVal = Math.max(maxVal, nums[i]);
//         }

//     // Count occurrences of each number in nums
//         for (let i = 0; i < nums.length; i++) {
//             hash[nums[i]]++;
//             }

//     // Find the number that occurs exactly once
//         for (let i = 0; i < nums.length; i++) {
//             if (hash[nums[i]] === 1) {
//             output = nums[i];
//             break; // Exit once the single number is found
//             }
//         }
//     }else{
//         output = nums[0]
//     }
// console.log(output);

//     return output;
// };


// singleNumber(nums)





//..............................................solution 3 ............................................


let arr = [1, 1, 2, 3, 3, 4, 4, 5, 5, 5, 5];
let xor = 0;

for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i]; // Continue XORing without return
}

console.log(xor); // Log the result after the loop finishes
