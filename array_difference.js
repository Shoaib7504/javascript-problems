// Find difference between two arrays (elements in array1 that are not in array2)
const arrayDifference = (arr1, arr2) => {
    const set2 = new Set(arr2);
    const diff = arr1.filter(item => !set2.has(item));
    return console.log(`Elements in [${arr1}] but not in [${arr2}]:`, diff);
}

arrayDifference([1, 2, 3, 4, 5], [2, 4, 6]);
arrayDifference(["apple", "banana", "cherry"], ["banana"]);
arrayDifference([1, 2], [1, 2, 3]);
