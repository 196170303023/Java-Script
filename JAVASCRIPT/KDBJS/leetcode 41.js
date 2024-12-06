/*
 Given an unsorted integer array nums, return the smallest missing positive integer.
Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

*/
function soort(a, b) {
    return a - b
}
let arr = [4,23,57,0,-21,1,2,-33,7]
arr.sort(soort)
let currvalue =0  
for (let i=0;i<arr.length;i++) {
    if (arr[i] == currvalue) {
        currvalue++
    }
}
console.log(currvalue)
