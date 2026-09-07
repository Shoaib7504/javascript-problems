// Check if a number is a perfect square
const isPerfectSquare = (n) => {
    if (n < 0) return console.log(`${n} is NOT a perfect square`);
    const sqrt = Math.sqrt(n);
    const perfect = sqrt === Math.floor(sqrt);
    if (perfect) {
        return console.log(`${n} is a Perfect Square (${sqrt} × ${sqrt})`);
    } else {
        return console.log(`${n} is NOT a perfect square`);
    }
}
isPerfectSquare(16);
isPerfectSquare(25);
isPerfectSquare(20);
isPerfectSquare(0);
