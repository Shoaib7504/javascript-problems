// Generate Pascal's Triangle up to n rows
const generatePascalTriangle = (numRows) => {
    if (numRows <= 0) return console.log("Number of rows must be greater than 0");
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }

    console.log(`Pascal's Triangle (${numRows} rows):`);
    triangle.forEach(r => console.log(r.join(" ")));
    return triangle;
}

generatePascalTriangle(5);
generatePascalTriangle(3);
