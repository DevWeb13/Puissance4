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
    currentColor = currentColor === 'R' ? 'Y' : 'R';
};//Si currentcolor vaut 'Rouge' alors on le passe en 'Yellow' sinon il repasse a 'Rouge'.

// Display grid
const displayGrid = () => {
    console.table(grid);
};
// Add event listeners
// // Get input from keyboard to play
// <el>.addEventListener(<eventName: String>, Callback: Function(event) );
document.addEventListener("keyup", ({ keyCode }) => {
    if (keyCode >= 49 && keyCode <= 55) {
        const colIndex = keyCode - 49;
        putTokenInGrid({ colIndex, color: currentColor });
    }
});

// // // Put token in grid
const putTokenInGrid = ({ colIndex, color }) => {

    for (let i = grid.length - 1; i >= 0; i--) {
        if (grid[i][colIndex] === null) {
            grid[i][colIndex] = color;
            break;
        }
    }

    checkWin({ grid, color });

    toggleColor();
    displayGrid();
};
// Check win

const checkWin = ({ grid, color }) => {
    // check vertical
    const isWinVer = checkVertical({ grid, color });
    // check horizontal
    const isWinHor = checkHorizontal({ grid, color });
    // check diag tl to br
    // const isWinDiagTLBR = checkDiagTLBR({ grid, color });
    // check diag tr to bl
    // const isWinDiagTRBL = checkDiagTRBL({ grid, color });
    return isWinVer || isWinHor;
};

/*const checkDiagTLBR = ({ grid, color } = {}) => {
    for (let x = 0; x < grid[0].length - 3; x++) {
        for (let y = 0; y < grid.length; y++) {
            if (color === (grid[y][x] && grid[y][x + 1] && grid[y][x + 2] && grid[y][x + 3])
        ) {
          console.log("win diagTLBR");
          return true;
            }
        }
    }
    return false;
};

const checkDiagTRBL = ({ grid, color } = {}) => {
    for (let x = 0; x < grid[0].length - 3; x++) {
        for (let y = 0; y < grid.length; y++) {
            if (color === (grid[y][x] && grid[y][x + 1] && grid[y][x + 2] && grid[y][x + 3])
        ) {
          console.log("win diagTRBL");
          return true;
            }
        }
    }
    return false;
};*/


const checkHorizontal = ({ grid, color } = {}) => {
    for (let x = 0; x < grid[0].length - 3; x++) {
        for (let y = 0; y < grid.length; y++) {
            if (color === (grid[y][x] && grid[y][x + 1] && grid[y][x + 2] && grid[y][x + 3])
        ) {
          console.log("win hor");
          return true;
            }
        }
    }
    return false;
};

const checkVertical = ({ grid, color } = {}) => {
    for (let x = 0; x < grid[0].length; x++) {
        for (let y = 0; y < grid.length - 3; y++) {
            if (color === (grid[y][x] && grid[y + 1][x] && grid[y + 2][x] && grid[y + 3][x])
            ) {
              console.log('win ver');
              return true;
            }
        }
        //console.log('--- end y');
    }
    //console.log('--- end x');
    return false;
};

// Opt: Check draw
// Opt: Add AI

// test

const gridNumbered = [
    ['x0;y0', 'x1;y0', 'x2;y0', 'x3;y0', 'x4;y0', 'x5;y0', 'x6;y0'],
    ['x0;y1', 'x1;y1', 'x2;y1', 'x3;y1', 'x4;y1', 'x5;y1', 'x6;y1'],
    ['x0;y2', 'x1;y2', 'x2;y2', 'x3;y2', 'x4;y2', 'x5;y2', 'x6;y2'],
    ['x0;y3', 'x1;y3', 'x2;y3', 'x3;y3', 'x4;y3', 'x5;y3', 'x6;y3'],
    ['x0;y4', 'x1;y4', 'x2;y4', 'x3;y4', 'x4;y4', 'x5;y4', 'x6;y4'],
    ['x0;y5', 'x1;y5', 'x2;y5', 'x3;y5', 'x4;y5', 'x5;y5', 'x6;y5'],
];

const gridNumbered2 = [
    ['x0;y0', 'x1;y0', 'x2;y0', 'x3;y0', 'x4;y0', 'x5;y0', 'x6;y0'],
    ['x0;y1', 'x1;y1', 'x2;y1', 'x3;y1', 'x4;y1', 'x5;y1', 'x6;y1'],
    ['R', 'x1;y2', 'x2;y2', 'x3;y2', 'x4;y2', 'x5;y2', 'x6;y2'],
    ['R', 'x1;y3', 'x2;y3', 'x3;y3', 'x4;y3', 'x5;y3', 'x6;y3'],
    ['R', 'x1;y4', 'x2;y4', 'x3;y4', 'x4;y4', 'x5;y4', 'x6;y4'],
    ['R', 'x1;y5', 'x2;y5', 'x3;y5', 'x4;y5', 'x5;y5', 'x6;y5'],
];

const gridNumbered3 = [
    ['x0;y0', 'x1;y0', 'x2;y0', 'x3;y0', 'x4;y0', 'x5;y0', 'x6;y0'],
    ['x0;y1', 'x1;y1', 'x2;y1', 'x3;y1', 'x4;y1', 'x5;y1', 'x6;y1'],
    ['x0;y2', 'R', 'R', 'R', 'R', 'x5;y2', 'x6;y2'],
    ['x0;y3', 'x1;y3', 'x2;y3', 'x3;y3', 'x4;y3', 'x5;y3', 'x6;y3'],
    ['x0;y4', 'x1;y4', 'x2;y4', 'x3;y4', 'x4;y4', 'x5;y4', 'x6;y4'],
    ['x0;y5', 'x1;y5', 'x2;y5', 'x3;y5', 'x4;y5', 'x5;y5', 'x6;y5'],
];



const obj = {
    grid: gridNumbered,
    color: "R",
};
const obj2 = {
    grid: gridNumbered2,
    color: "R",
};
const obj3 = {
    grid: gridNumbered3,
    color: "R",
};



const isTestWin1 = checkVertical(obj);
const isTestWin2 = checkVertical(obj2);
console.log(false === isTestWin1);
console.log(true === isTestWin2);

const isTestWin3 = checkVertical(obj);
const isTestWin4 = checkVertical(obj2);
console.log(false === isTestWin3);
console.log(true === isTestWin4);
