// Remove all falsy values (false, null, 0, "", undefined, NaN) from an array
const compactArray = (arr) => {
    const compacted = arr.filter(Boolean);
    return console.log(`Original: [${arr}] \nCompacted:`, compacted);
}

compactArray([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
compactArray([null, undefined, "hello", 42, true, false]);
compactArray(["", 0, false, null, undefined, NaN]);
compactArray([1, 2, 3, "apple"]);
