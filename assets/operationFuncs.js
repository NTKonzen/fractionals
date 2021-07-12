function multiply(x, y) {
    let xArr = x.split("/").map(v => +v);
    let yArr = y.split("/").map(v => +v);
    let newArr = xArr.map((v, i) => v * yArr[i]);
    return newArr.join('/');
}

function divide(x, y) {

}

function add(x, y) {

}

function subtract(x, y) {

}

module.exports = { multiply, divide, add, subtract };