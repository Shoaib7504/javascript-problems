// Validate if a string is a valid IPv4 address
const isValidIPv4 = (ip) => {
    const parts = ip.split('.');
    if (parts.length !== 4) {
        return console.log(`"${ip}" is NOT a valid IPv4 address`);
    }

    const isValid = parts.every(part => {
        if (!/^\d+$/.test(part)) return false;
        if (part.length > 1 && part.startsWith('0')) return false;
        const num = Number(part);
        return num >= 0 && num <= 255;
    });

    if (isValid) {
        return console.log(`"${ip}" is a VALID IPv4 address`);
    } else {
        return console.log(`"${ip}" is NOT a valid IPv4 address`);
    }
}

isValidIPv4("192.168.1.1");
isValidIPv4("255.255.255.0");
isValidIPv4("256.100.0.1");
isValidIPv4("192.168.01.1");
isValidIPv4("192.168.1");
