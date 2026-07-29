// Find the maximum element in an array
const findMax = (arr) => {
    if (arr.length === 0) return console.log("Array is empty");
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return console.log(`Maximum in [${arr}] is ${max}`);
}
findMax([3, 7, 2, 9, 5]);
findMax([-10, -3, -25, -1]);
