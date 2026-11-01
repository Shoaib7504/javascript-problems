// Convert a binary string to a decimal number
const binaryToDecimal = (binaryStr) => {
    if (!/^[01]+$/.test(binaryStr)) {
        return console.log(`"${binaryStr}" is not a valid binary string`);
    }
    let decimal = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        decimal = decimal * 2 + Number(binaryStr[i]);
    }
    return console.log(`Binary "${binaryStr}" in decimal: ${decimal}`);
}

binaryToDecimal("1010");
binaryToDecimal("11111111");
binaryToDecimal("100000000");
binaryToDecimal("1101");
binaryToDecimal("10201");

