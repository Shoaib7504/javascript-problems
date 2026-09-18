// Find the statistical mode (most frequent element) in an array
const findMode = (arr) => {
    if (!arr.length) return console.log("Array is empty");
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }

    for (const key in frequency) {
        if (frequency[key] === maxFreq) {
            modes.push(Number(key));
        }
    }

    return console.log(`The mode of [${arr}] is:`, modes.length === 1 ? modes[0] : modes, `(frequency: ${maxFreq})`);
}

findMode([1, 2, 2, 3, 4, 2, 5]);
findMode([1, 1, 2, 2, 3]);
findMode([7, 8, 9, 10]);
