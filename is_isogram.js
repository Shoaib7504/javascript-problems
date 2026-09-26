// Check if a string is an isogram (has no repeating letters)
const isIsogram = (str) => {
    const clean = str.toLowerCase().replace(/[^a-z]/g, '');
    const charSet = new Set(clean);
    if (charSet.size === clean.length) {
        return console.log(`"${str}" is an Isogram`);
    } else {
        return console.log(`"${str}" is NOT an Isogram`);
    }
}

isIsogram("Dermatoglyphics");
isIsogram("isogram");
isIsogram("subdermatoglyphic");
isIsogram("hello");
isIsogram("JavaScript");
