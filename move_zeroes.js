// Move all zeroes in an array to the end while keeping the order of the other numbers
const moveZeroes = (arr) => {
    let insertPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }
    for (let i = insertPos; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([1, 2, 3]));
console.log(moveZeroes([0, 0, 0]));
