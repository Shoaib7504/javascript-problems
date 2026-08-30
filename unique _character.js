function uniqueCharacters(str) {
  return [...new Set(str)].join("");
}

console.log(uniqueCharacters("hello"));
// "helo"
