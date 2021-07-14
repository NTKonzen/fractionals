// Finds and returns GCD (Greatest Common Divisor)
function findCommonDiv([x, y]) {
    // ensure both numbers are positive
    x = Math.abs(x)
    y = Math.abs(y)
    // Euclidean GCD Algorithm
    // The GCD can be found by subtracting
    // the smaller number from the
    // larger number until both numbers
    // are even
    if (x > y) x -= y
    else if (y > x) y -= x
    else if (x === y) return x;
    return findCommonDiv([x, y])
};

// formats arrayed fraction
function convertToNums(arr) {
    // Set default denominator of 1 to handle whole numbers
    if (!arr[1]) arr[1] = 1;
    // Turns mixed nums into improper fractions
    if (arr[0].includes("_")) {
        let first = arr[0].split("_");
        let lead = +first[0]; // leading number
        let num = +first[1]; // numerator
        // Multiply leading number with denominator and add to numerator
        arr[0] = (lead > 0 ? num : num * -1) + ((num > 0 ? lead : lead * -1) * Math.abs(arr[1]));
    };
    // Negative denominator and numerator make positive fraction
    if (arr[1] < 0 && arr[0] < 0) arr = arr.map(v => Math.abs(v));
    // negative denominator switched to negative numerator
    else if (arr[1] < 0) arr = arr.map(v => v * (-1));
    arr = arr.map(v => +v) // convert all to nums
    return arr;
};

// Converts arrayed fraction into display format
function convertToMixed(arr) {
    // if numerator equals denominator, display "1"
    if (arr[0] === arr[1]) return "1";
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