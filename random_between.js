// Generate a random number between min and max (inclusive)
const randomBetween = (min, max) => {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return console.log(`Random number between ${min} and ${max}: ${result}`);
}
randomBetween(1, 10);
randomBetween(50, 100);
randomBetween(1, 6);
