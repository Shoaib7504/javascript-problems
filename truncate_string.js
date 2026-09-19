// Truncate a string if it exceeds a specified maximum length
const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
        return console.log(`Result: "${str}"`);
    }
    const truncated = str.slice(0, maxLength) + "...";
    return console.log(`Result: "${truncated}"`);
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("Short text", 20);
truncateString("JavaScript", 4);
