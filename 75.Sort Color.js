// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.


let arr = [2, 0, 2, 1, 1, 0];

let count0 = 0;
let count1 = 0;
let count2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        count0++;
    } else if (arr[i] === 1) {
        count1++;
    } else if (arr[i] === 2) {
        count2++;
    }
}

for (let i = 0; i < count0; i++) {
    arr[i] = 0;
}

for (let i = count0; i < count0 + count1; i++) {
    arr[i] = 1;
}

for (let i = count0 + count1; i < arr.length; i++) {
    arr[i] = 2;
}

console.log(arr);
