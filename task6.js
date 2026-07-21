// Check if a string is a palindrome
const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    if (str === reversed) {
        return console.log(`"${str}" is a Palindrome`);
    } else {
        return console.log(`"${str}" is NOT a Palindrome`);
    }
}
isPalindrome("madam");
isPalindrome("racecar");
isPalindrome("hello");
