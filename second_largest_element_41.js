// Find the second largest element in an array
const secondLargest = (arr) => {
    if (arr.length < 2) return console.log("Array needs at least 2 elements");
    const sorted = [...new Set(arr)].sort((a, b) => b - a);
    if (sorted.length < 2) return console.log("No second largest element");
    return console.log(`Second largest in [${arr}] is ${sorted[1]}`);
}
secondLargest([3, 7, 2, 9, 5]);
secondLargest([10, 10, 10]);
secondLargest([1, 2, 3, 4, 5]);
