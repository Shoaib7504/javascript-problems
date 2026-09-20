// Find symmetric difference between two arrays (elements in either array, but not in both)
const symmetricDifference = (arr1, arr2) => {
    const diff1 = arr1.filter(item => !arr2.includes(item));
    const diff2 = arr2.filter(item => !arr1.includes(item));
    const result = [...new Set([...diff1, ...diff2])];
    return console.log(`Symmetric difference of [${arr1}] and [${arr2}]:`, result);
}

symmetricDifference([1, 2, 3, 4], [3, 4, 5, 6]);
symmetricDifference(["apple", "banana"], ["banana", "orange", "kiwi"]);
symmetricDifference([1, 2, 3], [1, 2, 3]);
symmetricDifference([10, 20], [30, 40]);
