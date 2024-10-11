// Function to count the vowels in the input string
function countVowels() {
    // Get the input value
    let input = document.getElementById('inputString').value;

    // Define a set of vowels to check against
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Count vowels by filtering characters from the input string
    let vowelCount = input.split('').filter(char => vowels.includes(char)).length;

    // Display the result
    document.getElementById('result').innerText = vowelCount;
}
