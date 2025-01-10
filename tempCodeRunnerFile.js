// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. It is guaranteed that a valid subarray exists.


let arr = [10, 5, 2, 7, 1, 9];
let sum = 24;
let maxLength = 0;

for (let i = 0; i < arr.length; i++) {
    let total = 0; 
    for (let j = i; j < arr.length; j++) {
        total += arr[j];
        if (total === sum) {
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }
}

console.log(maxLength);
