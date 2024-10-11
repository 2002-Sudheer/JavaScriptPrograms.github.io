// List of planets with their respective IDs
const planets = {
    Mercury: 1,
    Venus: 2,
    Earth: 3,
    Mars: 4,
    Jupiter: 5,
    Saturn: 6,
    Uranus: 7,
    Neptune: 8
};

// Function to get the planet ID
function getPlanetID() {
    let planetName = document.getElementById('planet').value.trim();
    
    // Capitalize the first letter to match object keys
    planetName = planetName.charAt(0).toUpperCase() + planetName.slice(1).toLowerCase();

    // Check if the planet exists in the list and display the ID
    if (planets[planetName]) {
        document.getElementById('result').innerText = "The ID of " + planetName + " is " + planets[planetName];
    } else {
        document.getElementById('result').innerText = "Planet not found";
    }
}
