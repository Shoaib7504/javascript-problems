// Rotate an array by k positions to the right
const rotateArray = (arr, k) => {
    const n = arr.length;
    const rotations = k % n;
    const rotated = [...arr.slice(n - rotations), ...arr.slice(0, n - rotations)];
    return console.log(`[${arr}] rotated by ${k} => [${rotated}]`);
}
rotateArray([1, 2, 3, 4, 5], 2);
rotateArray([1, 2, 3, 4, 5], 7);
rotateArray([1, 2, 3], 0);
