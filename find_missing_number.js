// Find the missing number in an array from 1 to n
const findMissing = (arr) => {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    const missing = expectedSum - actualSum;
    return console.log(`Array: [${arr}] => Missing number is ${missing}`);
}
findMissing([1, 2, 4, 5, 6]);
findMissing([3, 7, 1, 2, 8, 4, 5]);
findMissing([1, 2, 3, 4, 5, 6, 7, 9, 10]);
