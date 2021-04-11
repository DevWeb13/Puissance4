// Check win

const checkWin = ({ grid, color }) => {
    // check vertical
    const isWinVer = checkVertical({ grid, color });
    // check horizontal
    const isWinHor = checkHorizontal({ grid, color });
    // check diag tl to br
    const isWinDiagTLBR = checkDiagTLBR({ grid, color });
    // check diag tr to bl
    const isWinDiagTRBL = checkDiagTRBL({ grid, color });
    return isWinVer || isWinHor || isWinDiagTLBR || isWinDiagTRBL;
};

const checkDiagTLBR = ({ grid, color } = {}) => {
    for (let x = 0; x < grid[0].length -3; x++) {
        for (let y = 0; y < grid.length -3 ; y++) {
            if (
                grid[y][x] === color &&
                grid[y + 1][x + 1] === color &&
                grid[y + 2][x + 2] === color &&
                grid[y + 3][x + 3] === color
            ) {
                console.log("win diagTLBR");
                return true;
            }
        }
    }
    return false;
};

const checkDiagTRBL = ({ grid, color } = {}) => {
    for (let x = 3; x < grid[0].length; x++) {
        for (let y = 0; y < grid.length -3; y++) {
            if (
                grid[y][x] === color &&
                grid[y + 1][x - 1] === color &&
                grid[y + 2][x - 2] === color &&
                grid[y + 3][x - 3] === color
            ) {
          console.log("win diagTRBL");
          return true;
            }
        }
    }
    return false;
};


const checkHorizontal = ({ grid, color } = {}) => {
    for (let x = 0; x < grid[0].length - 3; x++) {
        for (let y = 0; y < grid.length; y++) {
            if (
                grid[y][x] === color &&
                grid[y][x + 1] === color &&
                grid[y][x + 2] === color &&
                grid[y][x + 3] === color
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
            if (
                grid[y][x] === color &&
                grid[y + 1][x] === color &&
                grid[y + 2][x] === color &&
                grid[y + 3][x] === color
            ) {
                console.log("win ver");
                return true;
            }
        }
    }
    return false;
};