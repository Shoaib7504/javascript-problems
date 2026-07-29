// FizzBuzz: print numbers 1 to n, multiples of 3 print Fizz, 5 Buzz, both FizzBuzz
const fizzBuzz = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i);
    }
    return console.log(`FizzBuzz (1-${n}): ${result.join(', ')}`);
}
fizzBuzz(15);
fizzBuzz(20);
