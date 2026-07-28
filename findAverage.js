// Find the average of an array of numbers
const findAverage = (arr) => {
    if (arr.length === 0) return console.log("Array is empty");
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / arr.length;
    return console.log(`Average of [${arr}] is ${avg}`);
}
findAverage([10, 20, 30, 40, 50]);
findAverage([5, 10, 15]);
findAverage([-2, 0, 2]);
