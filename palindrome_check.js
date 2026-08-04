// Check if a string is a palindrome
const isPalindrome = (str) => {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    if (cleaned === reversed) {
        return console.log(`"${str}" is a Palindrome`);
    } else {
        return console.log(`"${str}" is NOT a Palindrome`);
    }
}
isPalindrome("racecar");
isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("hello");
