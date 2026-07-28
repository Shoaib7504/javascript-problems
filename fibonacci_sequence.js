// Print the Fibonacci sequence up to n terms
const fibonacci = (n) => {
    if (n <= 0) return console.log("Please enter a positive number");
    const seq = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) seq.push(0);
        else if (i === 1) seq.push(1);
        else seq.push(seq[i - 1] + seq[i - 2]);
    }
    return console.log(`Fibonacci (${n} terms): [${seq.join(', ')}]`);
}
fibonacci(10);
fibonacci(5);
fibonacci(1);
