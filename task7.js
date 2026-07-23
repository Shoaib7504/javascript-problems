// Count vowels in a string
const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return console.log(`Vowels in "${str}": ${count}`);
}
countVowels("Hello World");
countVowels("JavaScript");
countVowels("Rhythm");
