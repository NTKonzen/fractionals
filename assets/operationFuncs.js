let {
    findCommonDiv, // Finds GCD (Greatest Common Divisor)
    convertToNums, // Converts an array into an array representing a fraction
    convertToMixed // Converts an array representing a fraction into a formatted fraction or mixed number
} = require("./assistFuncs.js");

function multiply(x, y) {
    let xArr = convertToNums(x.split('/'));
    let yArr = convertToNums(y.split('/'));
    // Multiply fractions together
    let newArr = xArr.map((v, i) => v * yArr[i]);
    let commonDiv = findCommonDiv(newArr);
    newArr = newArr.map(v => v / commonDiv); // divide by GCD
    return convertToMixed(newArr);
}

function divide(x, y) {
    let xArr = convertToNums(x.split('/'));
    let yArr = convertToNums(y.split('/')).reverse(); // flip divisor fraction
    // flips negatives if denom is neg
    if (xArr[1] < 0 && xArr[0] > 0) xArr = xArr.map(v => v * -1);
    if (yArr[1] < 0 && yArr[0] > 0) yArr = yArr.map(v => v * -1);
    // multiply fractions together
    let newArr = xArr.map((v, i) => v * yArr[i]);
    let commonDiv = findCommonDiv(newArr);
    newArr = newArr.map(v => v / commonDiv); // divide by GCD
    return convertToMixed(newArr);
}

function add(x, y) {
    let xArr = convertToNums(x.split('/'));
    let yArr = convertToNums(y.split('/'));
    // Find common denominator and multiply fractions by such
    let commonDenom = xArr[1] * yArr[1];
    xArr[0] *= yArr[1];
    yArr[0] *= xArr[1];
    let newArr = [xArr[0] + yArr[0], commonDenom]; // add fractions
    let commonDiv = findCommonDiv(newArr);
    newArr = newArr.map(v => v / commonDiv); // divide by GCD
    return convertToMixed(newArr);
}

function subtract(x, y) {
    let xArr = convertToNums(x.split('/'));
    let yArr = convertToNums(y.split('/'));
    // Find common denominator and multiply fractions by such
    let commonDenom = xArr[1] * yArr[1];
    xArr[0] *= yArr[1];
    yArr[0] *= xArr[1];
    let newArr = [xArr[0] - yArr[0], commonDenom]; // subtract fractions
    let commonDiv = findCommonDiv(newArr);
    newArr = newArr.map(v => v / commonDiv); // divide by GCD
    return convertToMixed(newArr);
}

module.exports = { multiply, divide, add, subtract };