let { findCommonDiv, convertToNums, convertToMixed } = require("./assistFuncs.js");

function multiply(x, y) {
    let xArr = convertToNums(x.split('/'));
    let yArr = convertToNums(y.split('/'));
    let newArr = xArr.map((v, i) => v * yArr[i]);
    let commonDiv = findCommonDiv(newArr);
    while (commonDiv) {
        newArr = newArr.map(v => v / commonDiv);
        commonDiv = findCommonDiv(newArr)
    }
    return convertToMixed(newArr);
}

function divide(x, y) {
    let xArr = convertToNums(x.split('/'));
    let yArr = convertToNums(y.split('/')).reverse();
    let newArr = xArr.map((v, i) => v * yArr[i]);
    let commonDiv = findCommonDiv(newArr);
    while (commonDiv) {
        newArr = newArr.map(v => v / commonDiv);
        commonDiv = findCommonDiv(newArr)
    }
    return newArr.join('/');
}

function add(x, y) {
    let xArr = convertToNums(x.split('/'));
    let yArr = convertToNums(y.split('/'));
    let commonDenom = xArr[1] * yArr[1];
    xArr[0] *= yArr[1];
    yArr[0] *= xArr[1];
    let newArr = [xArr[0] + yArr[0], commonDenom];
    let commonDiv = findCommonDiv(newArr);
    while (commonDiv) {
        newArr = newArr.map(v => v / commonDiv);
        commonDiv = findCommonDiv(newArr);
    }
    return convertToMixed(newArr);
}

function subtract(x, y) {
    let xArr = convertToNums(x.split('/'));
    let yArr = convertToNums(y.split('/'));
    let commonDenom = xArr[1] * yArr[1];
    xArr[0] *= yArr[1];
    yArr[0] *= xArr[1];
    let newArr = [xArr[0] - yArr[0], commonDenom];
    let commonDiv = findCommonDiv(newArr);
    while (commonDiv) {
        newArr = newArr.map(v => v / commonDiv);
        commonDiv = findCommonDiv(newArr);
    }
    return convertToMixed(newArr);
}

module.exports = { multiply, divide, add, subtract };