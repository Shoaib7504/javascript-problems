// Find the longest common prefix among an array of strings
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return console.log("No strings to compare");
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return console.log("No common prefix");
        }
    }
    return console.log(`Longest common prefix of [${strs}]: "${prefix}"`);
}

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
longestCommonPrefix(["interview", "intermediate", "internal"]);
longestCommonPrefix([]);
