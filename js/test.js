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