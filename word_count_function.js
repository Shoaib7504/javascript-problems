function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

console.log(countWords("Hello world, how are you?")); // 5
