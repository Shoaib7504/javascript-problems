// Find the factorial of a number
const factorial = (n) => {
    if (n < 0) return console.log(`Factorial of ${n} is not defined`);
    if (n === 0 || n === 1) return console.log(`Factorial of ${n} is 1`);
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return console.log(`Factorial of ${n} is ${result}`);
}
factorial(5);
factorial(0);
factorial(7);
