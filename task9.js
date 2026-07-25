// Reverse an array
const reverseArray = (arr) => {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return console.log(`Original: [${arr}] => Reversed: [${reversed}]`);
}
reverseArray([1, 2, 3, 4, 5]);
reverseArray(["a", "b", "c", "d"]);
