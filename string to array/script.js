// Function to convert string to array
function stringToArray() {
    // Get the input value
    let input = document.getElementById('inputString').value;

    // Convert the string into an array (split by space or characters)
    let array = input.split(''); // Split by character, use ' ' for splitting by spaces

    // Display the result
    document.getElementById('result').innerText = JSON.stringify(array);
}
