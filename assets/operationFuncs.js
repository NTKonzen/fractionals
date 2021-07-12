let { findCommonDenom } = require("./assistFuncs.js");

function multiply(x, y) {
    let xArr = x.split("/").map(v => +v);
    let yArr = y.split("/").map(v => +v);
    let newArr = xArr.map((v, i) => v * yArr[i]);
    let commonDenom = findCommonDenom(newArr);
    while (commonDenom) {
        newArr = newArr.map(v => v / commonDenom);
        commonDenom = findCommonDenom(newArr)
    }
    return newArr.join('/');
}

function divide(x, y) {
    let xArr = x.split("/").map(v => +v);
    let yArr = y.split("/").map(v => +v).reverse();
    let newArr = xArr.map((v, i) => v * yArr[i]);
    let commonDenom = findCommonDenom(newArr);
    while (commonDenom) {
        newArr = newArr.map(v => v / commonDenom);
        commonDenom = findCommonDenom(newArr)
    }
    return newArr.join('/');
}

function add(x, y) {

}

function subtract(x, y) {

}

module.exports = { multiply, divide, add, subtract };