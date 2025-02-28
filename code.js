/**
 * Function to calculate the square of each number in an array
 * @param {number[]} numbersArray - The array of numbers to be squared
 * @returns {number[]} - An array of squared numbers
 */
function calculateSquares(numbersArray) {
    // Check if the input is an array
    if (!Array.isArray(numbersArray)) {
        throw new Error('Input must be an array');
    }

    // Use map to create a new array with the squares of the numbers
    const squaredArray = numbersArray.map(number => {
        // Check if the element is a number
        if (typeof number !== 'number') {
            throw new Error('Array must contain only numbers');
        }
        return number * number;
    });

    return squaredArray;
}

// Example usage
const inputArray = [1, 2, 3, 4, 5];
const resultArray = calculateSquares(inputArray);
console.log(resultArray); // Output: [1, 4, 9, 16, 25]