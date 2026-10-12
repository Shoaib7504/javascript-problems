// Check if a number is a power of two
const isPowerOfTwo = (num) => {
    const isPower = num > 0 && (num & (num - 1)) === 0;
    if (isPower) {
        return console.log(`${num} IS a power of 2`);
    } else {
        return console.log(`${num} is NOT a power of 2`);
    }
}

isPowerOfTwo(1);
isPowerOfTwo(16);
isPowerOfTwo(64);
isPowerOfTwo(18);
isPowerOfTwo(0);
isPowerOfTwo(-8);
