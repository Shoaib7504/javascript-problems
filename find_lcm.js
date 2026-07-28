// Find the LCM (Least Common Multiple) of two numbers
const lcm = (a, b) => {
    const gcd = (x, y) => { while (y) { let t = y; y = x % y; x = t; } return x; };
    const result = Math.abs(a * b) / gcd(a, b);
    return console.log(`LCM of ${a} and ${b} is ${result}`);
}
lcm(4, 6);
lcm(7, 5);
lcm(12, 18);
