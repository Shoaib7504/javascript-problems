// Perform binary search on a sorted array
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return console.log(`Target ${target} found at index ${mid}`);
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return console.log(`Target ${target} was NOT found in [${arr}]`);
}

binarySearch([10, 20, 30, 40, 50, 60], 40);
binarySearch([2, 5, 8, 12, 16, 23, 38], 23);
binarySearch([1, 3, 5, 7, 9], 4);
