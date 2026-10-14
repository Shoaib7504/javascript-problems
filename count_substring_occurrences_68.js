// Count occurrences of a substring within a string
const countSubstring = (str, sub) => {
    if (!sub) return console.log("Substring cannot be empty");
    let count = 0;
    let pos = 0;

    while ((pos = str.indexOf(sub, pos)) !== -1) {
        count++;
        pos += sub.length;
    }

    return console.log(`"${sub}" appears in "${str}" ${count} time(s)`);
}

countSubstring("banana", "an");
countSubstring("hello world, hello universe", "hello");
countSubstring("aaaaa", "aa");
countSubstring("coding is fun", "xyz");
