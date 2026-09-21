// Convert a decimal number to its binary representation
const decimalToBinary = (num) => {
    if (num === 0) return console.log(`Decimal 0 in binary: "0"`);
    let n = Math.floor(Math.abs(num));
    let binary = "";
    while (n > 0) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }
    const result = num < 0 ? `-${binary}` : binary;
    return console.log(`Decimal ${num} in binary: "${result}"`);
}

decimalToBinary(10);
decimalToBinary(25);
decimalToBinary(0);
decimalToBinary(255);
