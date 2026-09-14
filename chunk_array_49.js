// Split an array into chunks of specified size
const chunkArray = (arr, size) => {
    if (size <= 0) return console.log("Chunk size must be greater than 0");
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return console.log(`Chunks of [${arr}] with size ${size}:`, result);
}

chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
chunkArray(["a", "b", "c", "d"], 2);
chunkArray([10, 20, 30], 5);
chunkArray([1, 2, 3], 0);
