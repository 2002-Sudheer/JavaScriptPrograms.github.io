// Function to calculate the sum of positive integers in the array
function sumOfPositiveIntegers() {
    // Get the input value
    let input = document.getElementById('inputArray').value;

    // Split the input string into an array of numbers
    let numbers = input.split(',').map(Number);

    // Calculate the sum of positive integers
    let sum = numbers.reduce((accumulator, current) => {
        return current > 0 ? accumulator + current : accumulator;
    }, 0);

    // Display the result
    document.getElementById('result').innerText = sum;
}
