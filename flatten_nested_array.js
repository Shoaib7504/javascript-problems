// Flatten a nested array
const flattenArray = (arr) => {
    const flattened = arr.flat(Infinity);
    return console.log(`Nested: ${JSON.stringify(arr)} => Flattened: [${flattened}]`);
}
flattenArray([1, [2, [3, 4], 5], 6]);
flattenArray([[1, 2], [3, [4, [5]]]]);
