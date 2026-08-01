// Find the longest word in a sentence
const longestWord = (sentence) => {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length > longest.length) longest = word;
    }
    return console.log(`Longest word in "${sentence}" is "${longest}" (${longest.length} chars)`);
}
longestWord("The quick brown fox jumps over the lazy dog");
longestWord("JavaScript is awesome");
