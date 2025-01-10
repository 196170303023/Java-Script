// // Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. It is guaranteed that a valid subarray exists.

// //........................................solution 1 ................................................//
// // let arr = [10, 5, 2, 7, 1, 9]
// // let sum = 15 
// // let total =  0 
// // let length = 0 

// // for(let i = 0 ; i < arr.length ; i++){
// //     for(let j = i ; j < arr.length ; i++){
// //         for(let k = i ; i = j ;k++){
// //             total = total + arr[i]
// //             if(total == k ){
// //                 length = Math.max(total , j-i+1)
// //             }
// //         }
// //     }
// // }

// // console.log(length);



// //.......................................solution 3 ..........................................


// function longestSubarrayWithSumK(a, k) {
//     let preSumMap = new Map();
//     let sum = 0;
//     let maxLen = 0;

//     for (let i = 0; i < a.length; i++) {
//         sum += a[i];

//         if (sum === k) {
//             maxLen = Math.max(maxLen, i + 1);
//         }

//         let rem = sum - k;
//         if (preSumMap.has(rem)) {
//             let len = i - preSumMap.get(rem);
//             maxLen = Math.max(maxLen, len);
//         }

//         if (!preSumMap.has(sum)) {
//             preSumMap.set(sum, i);
//         }
//     }

//     return maxLen;
// }
// let a = [10, 5, 2, 7, 1, 9]
// let k = 10
// console.log(longestSubarrayWithSumK(a,k))
