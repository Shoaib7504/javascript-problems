function digitalRoot(num) {
  while (num >= 10) {
    num = String(num)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return num;
}

console.log(digitalRoot(9875)); // 2
console.log(digitalRoot(1234)); // 1
console.log(digitalRoot(99));   // 9
