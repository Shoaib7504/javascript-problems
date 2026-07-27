// Find the frequency of elements in an array
const elementFrequency = (arr) => {
    const freq = {};
    for (const item of arr) {
        freq[item] = (freq[item] || 0) + 1;
    }
    return console.log(`Frequency in [${arr}]:`, freq);
}
elementFrequency([1, 2, 2, 3, 3, 3, 4]);
elementFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]);
