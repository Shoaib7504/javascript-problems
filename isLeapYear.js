// Check if a year is a leap year
const isLeapYear= (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return console.log(`${year} is a Leap Year`);
    } else {
        return console.log(`${year} is NOT a Leap Year`);
    }
}
isLeapYear(2024);
isLeapYear(2025);
isLeapYear(1900);
isLeapYear(2000);
