// Find the largest of three numbers
const findLargest = (a, b, c) => {
    let largest = a;
    if (b > largest) largest = b;
    if (c > largest) largest = c;
    return console.log(`Largest among ${a}, ${b}, ${c} is ${largest}`);
}
findLargest(12, 45, 23);
findLargest(100, 50, 75);
