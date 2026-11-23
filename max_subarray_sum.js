// Find the maximum sum of any contiguous subarray (Kadane's algorithm)
const maxSubarraySum = (arr) => {
    if (arr.length === 0) return console.log("Array is empty");
    let maxSoFar = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSoFar = Math.max(maxSoFar, currentSum);
    }
    return console.log(`Maximum subarray sum of [${arr}]: ${maxSoFar}`);
}

maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubarraySum([1, 2, 3, 4, 5]);
maxSubarraySum([-1, -2, -3, -4]);
maxSubarraySum([5]);
