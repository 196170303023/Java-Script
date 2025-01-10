// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

// Examples:

// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6
// Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.
// Input: arr[] = [-5, 8, -14, 2, 4, 12], k = -5
// Output: 5
// Explanation: Only subarray with sum = 15 is [-5, 8, -14, 2, 4] of length 5.
// Input: arr[] = [10, -10, 20, 30], k = 5
// Output: 0
// Explanation: No subarray with sum = 5 is present in arr[].
class Solution {
    longestSubarray(arr, k) {
        let maxLength = 0;
        let sum = 0;
        let sumMap = new Map();

        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];

            // If sum equals k, update maxLength
            if (sum === k) {
                maxLength = i + 1;
            }

            // If (sum - k) is found in map, calculate the length of the subarray
            if (sumMap.has(sum - k)) {
                maxLength = Math.max(maxLength, i - sumMap.get(sum - k));
            }

            // Store the cumulative sum if it's not already in the map
            if (!sumMap.has(sum)) {
                sumMap.set(sum, i);
            }
        }

        return maxLength;
    }
}


