// Find sum of all multiples of 3 or 5 below a given limit
const sumMultiplesOf3And5 = (limit) => {
    let total = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    return console.log(`Sum of multiples of 3 or 5 below ${limit} is: ${total}`);
}

sumMultiplesOf3And5(10); // 3 + 5 + 6 + 9 = 23
sumMultiplesOf3And5(20);
sumMultiplesOf3And5(100);
sumMultiplesOf3And5(1000);
