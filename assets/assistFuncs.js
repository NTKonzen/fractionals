// Finds and returns GCD (Greatest Common Divisor)
function findCommonDiv(arr) {
    let divMap = {};
    arr.forEach(v => {
        // Checks for GCD from 2 to number value
        for (let i = 2; i <= v; i++) {
            if (v % i === 0) { // if divisor found
                let k = divMap[i];
                divMap[i] = k ? k += 1 : 1; // increase or add to map
            };
        }
    });
    let foundDiv = Object.entries(divMap)
        // reduce each divisor found to 1 if not found two or more times
        .map(([k, v]) => v > 1 ? k : 1)
        // collapse all common divisors into single GCD
        .reduce((t, v) => t * v);
    return foundDiv;
};

// formats arrayed fraction
function convertToNums(arr) {
    // Set default denominator of 1 to handle whole numbers
    if (!arr[1]) arr[1] = 1;
    // Turns mixed nums into improper fractions
    if (arr[0].includes("_")) {
        let first = arr[0].split("_");
        let num = +first[0]; // find leading number
        // Multiply leading number with denominator and add to numerator
        arr[0] = (num > 0 ? +first[1] : +first[1] * -1) + (num * arr[1]);
    };
    arr = arr.map(v => +v) // convert all to nums
    return arr;
};

// Converts arrayed fraction into display format
function convertToMixed(arr) {
    // if numerator equals denominator, display "1"
    if (arr[0] === arr[1]) return "1";
    // Negative denominator and numerator make positive fraction
    if (arr[1] < 0 && arr[0] < 0) arr = arr.map(v => Math.abs(v))
    // negative denominator switched to negative numerator
    else if (arr[1] < 0) arr = arr.map(v => v * (-1))
    if (Math.abs(arr[0]) > arr[1]) { // improper fraction found
        // find leading number
        let num = (arr[0] / arr[1]) >> 0; // rounds towards zero
        // subtract (leading whole number * denominator) from numerator
        arr[0] = Math.abs(arr[0] - (num * arr[1]));
        // if numerator is 0, return whole number
        if (arr[0] === 0) return num.toString();
        return `${num}_${arr[0]}/${arr[1]}` // format mixed num
    };
    // return proper fraction
    return arr.join('/');
}

module.exports = { findCommonDiv, convertToNums, convertToMixed };