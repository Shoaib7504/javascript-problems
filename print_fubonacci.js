// Generate Fibonacci sequence up to n terms
const fibonacci = (n) => {
    if (n <= 0) return console.log("Enter a positive number");
    let a = 0, b = 1, sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
    return console.log(`Fibonacci (${n} terms): [${sequence}]`);
}
fibonacci(10);
fibonacci(5);
