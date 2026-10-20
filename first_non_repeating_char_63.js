// Find the first non-repeating character in a string
const firstNonRepeatingChar = (str) => {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return console.log(`First non-repeating character in "${str}": "${char}"`);
        }
    }

    return console.log(`No non-repeating character found in "${str}"`);
}

firstNonRepeatingChar("swiss");
firstNonRepeatingChar("programming");
firstNonRepeatingChar("aabbcc");
firstNonRepeatingChar("racecar");
