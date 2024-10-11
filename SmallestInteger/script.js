// Function to find the smallest integer in the array
function findSmallestInteger() {
    // Get the input value
    let input = document.getElementById('inputArray').value;

    // Split the input string into an array of numbers
    let numbers = input.split(',').map(Number);

    // Find the smallest integer using Math.min
    let smallest = Math.min(...numbers);

    // Display the result
    document.getElementById('result').innerText = smallest;
}
