//....................................SOLUTION 2 .......................................//
// function twoSum(nums, target) {
//     let map = new Map();

//     // Populate the map with array values and their indices
//     for (let i = 0; i < nums.length; i++) {
//         let a = nums[i];
//         let needs = target - a;

//         // Check if the complement exists in the map
//         if (map.has(needs)) {
//             return [map.get(needs), i]; // Return the indices as an array
//         }

//         // Add the current number and its index to the map
//         map.set(a, i);
//     }

//     return []; 
// }



//............................................SOLUTION 3 ................................

function twoSum ( nums, target){
    let left = 0;
    let n = nums.length
    let right = n - 1;

    nums.sort((a, b) => a - b); 

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === target) {
            return [i,j]; 
        } else if (sum < target) {
            left++; 
        } else {
            right--; 
        }
    }
}
