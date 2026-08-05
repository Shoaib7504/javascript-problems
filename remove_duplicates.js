// Remove duplicates from an array
const removeDuplicates = (arr) => {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return console.log(`Original: [${arr}] => Without Duplicates: [${unique}]`);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
removeDuplicates(["a", "b", "a", "c", "b"]);
