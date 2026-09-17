// Count the number of consonants in a string
const countConsonants = (str) => {
    const matches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    const count = matches ? matches.length : 0;
    return console.log(`"${str}" has ${count} consonant(s)`);
}

countConsonants("Hello World");
countConsonants("AEIOU");
countConsonants("JavaScript Problem Solving");
countConsonants("1234!@#$");
