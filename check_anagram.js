// Check if two strings are anagrams of each other
const isAnagram = (str1, str2) => {
    const clean = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
    if (clean(str1) === clean(str2)) {
        return console.log(`"${str1}" and "${str2}" are Anagrams`);
    }
    return console.log(`"${str1}" and "${str2}" are NOT Anagrams`);
}

isAnagram("listen", "silent");
isAnagram("triangle", "integral");
isAnagram("hello", "world");
isAnagram("Dormitory", "dirty room");
