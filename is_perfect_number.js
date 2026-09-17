// Check if a number is a perfect number (sum of proper divisors equals the number)
const isPerfectNumber = (num) => {
    if (num <= 1) return console.log(`${num} is NOT a perfect number`);
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    if (sum === num) {
        return console.log(`${num} is a Perfect Number`);
    } else {
        return console.log(`${num} is NOT a Perfect Number`);
    }
}

isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(496);
isPerfectNumber(12);
