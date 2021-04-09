// Define HTML elements
// Set up player & color
let currentColor = "R";
const grid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
];

//Change color every round
const toggleColor = () => {
    currentColor = currentColor === 'R' ? 'Y' : 'R';//Si currentcolor vaut 'Rouge' alors on le passe en 'Yellow' sinon il repasse a 'Rouge'.
}

// Display grid
// Add event listeners
// // Get input from keyboard to play
// // // Put tokrn in grid
// Check win
// Opt: Check draw
// Opt: Add AI
