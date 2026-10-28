// Check if a string is a pangram (contains every letter of the alphabet)
const isPangram = (str) => {
    const letters = new Set(str.toLowerCase().replace(/[^a-z]/g, ''));
    const isPangramSentence = letters.size === 26;
    if (isPangramSentence) {
        return console.log(`"${str}" IS a pangram`);
    } else {
        return console.log(`"${str}" is NOT a pangram (missing ${26 - letters.size} letters)`);
    }
}

isPangram("The quick brown fox jumps over the lazy dog");
isPangram("Pack my box with five dozen liquor jugs");
isPangram("Hello World");
isPangram("The five boxing wizards jump quickly");

