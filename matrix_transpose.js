// Transpose a 2D matrix (swap rows with columns)
const transposeMatrix = (matrix) => {
    if (!matrix.length || !matrix[0].length) return console.log("Invalid matrix");
    const transposed = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    return console.log("Original Matrix:", matrix, "\nTransposed Matrix:", transposed);
}

transposeMatrix([
    [1, 2, 3],
    [4, 5, 6]
]);

transposeMatrix([
    [1, 2],
    [3, 4],
    [5, 6]
]);
