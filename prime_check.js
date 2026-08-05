// Check if a number is prime
const isPrime = (n) => {
    if (n <= 1) return console.log(`${n} is NOT a prime number`);
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return console.log(`${n} is NOT a prime number`);
    }
    return console.log(`${n} is a Prime number`);
}
isPrime(7);
isPrime(12);
isPrime(2);
isPrime(97);
