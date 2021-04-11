// Define HTML elements
// Set up player & color
let canvasEl = null;
let ctx = null;
let currentColor = "R";
let isPlaying = true;

const defaultGrid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
];

let grid = [...defaultGrid];

//Change color every round
const toggleColor = () => {
    currentColor = currentColor === 'R' ? 'Y' : 'R';
};//Si currentcolor vaut 'Rouge' alors on le passe en 'Yellow' sinon il repasse a 'Rouge'.

// Opt: Check draw

const init = () => {
    attachFromDOM();
    addEventListeners();
    drawBoard();
    displayGrid();
    //checkWin({ grid, color: "Y" })
    //ctx.translate(50, 50);
};

const attachFromDOM = () => {
    canvasEl = document.querySelector("#canvas");
    ctx = canvasEl.getContext("2d");
};

const addEventListeners = () => {
// Add event listeners
// // Get input from keyboard to play
// <el>.addEventListener(<eventName: String>, Callback: Function(event) );
document.addEventListener("keyup", onKeyUp);
};

window.addEventListener('load', init);
