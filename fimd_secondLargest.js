// Find the second largest number in an array
const secondLargest = (arr) => {
    if (arr.length < 2) return console.log("Array needs at least 2 elements");
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return console.log(`Second largest in [${arr}] is ${second}`);
}
secondLargest([10, 20, 30, 40, 50]);
secondLargest([5, 8, 3, 9, 1]);
