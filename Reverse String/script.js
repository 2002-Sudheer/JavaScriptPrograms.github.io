// Function to reverse the input string
function reverseString() {
    let input = document.getElementById('inputString').value;
    
    // Split the string into an array, reverse the array, and join it back into a string
    let reversed = input.split('').reverse().join('');
    
    // Display the reversed string
    document.getElementById('result').innerText = reversed;
}
