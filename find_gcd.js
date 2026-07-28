// Find the GCD (Greatest Common Divisor) of two numbers
const gcd = (a, b) => {
    let x = Math.abs(a), y = Math.abs(b);
    while (y) { let temp = y; y = x % y; x = temp; }
    return console.log(`GCD of ${a} and ${b} is ${x}`);
}
gcd(12, 18);
gcd(7, 13);
gcd(48, 18);
