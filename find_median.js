// Find the median of an array of numbers
const findMedian = (arr) => {
    if (arr.length === 0) return console.log("Array is empty");
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    let median;
    if (sorted.length % 2 === 0) {
        median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        median = sorted[mid];
    }
    return console.log(`Median of [${arr}] is ${median}`);
}
findMedian([3, 1, 4, 2]);
findMedian([5, 2, 8, 1, 9]);
findMedian([1, 2, 3, 4, 5, 6]);
