function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }

  return a / b;
}

console.log(divide(10, 2)); // 5
console.log(divide(15, 3)); // 5
console.log(divide(10, 0)); // Cannot divide by zero
