// Find the common elements (intersection) of two arrays
const arrayIntersection = (arr1, arr2) => {
    const set2 = new Set(arr2);
    const result = [];
    for (const num of arr1) {
        if (set2.has(num) && !result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(arrayIntersection([1, 2, 2, 3], [2, 3, 4]));
console.log(arrayIntersection([5, 6, 7], [1, 2, 3]));
console.log(arrayIntersection(["a", "b", "c"], ["b", "c", "d"]));
