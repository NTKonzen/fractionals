// Finds and returns GCD (Greatest Common Divisor)
function findCommonDiv(arr) {
    let divMap = {}; // map of {value: [binary divisors],...}
    arr.forEach(val => {
        val = Math.abs(val); // make pos
        let key = val; // save map key
        for (let div = 2; div <= val; div++) {
            // all nums divisible by 1, start at 2
            if (val % div === 0) {
                // push divisor to number-associated array in map
                if (divMap[key]) divMap[key].push(div);
                else divMap[key] = [div];
                val = val / div; // divide number by divisor
                div = 1; // reset i
            }
        };
    });
    let divArr = Object.values(divMap);
    let first = divArr[0];
    let second = divArr[1];
    if (!first || !second) return 1; // if no GCD
    // filter out uncommon divisors
    second = second.filter(v => first.includes(v));
    let filteredArr = first
        .filter(v => second.includes(v))
        .filter((v, i) => second[i] === v); // ensure same number of common divisors
    let foundDiv = 1; // default GCD of 1
    // Collapse all common divisors into single GCD
    if (filteredArr.length > 0) foundDiv = filteredArr.reduce((t, v) => t * v);
    return foundDiv;
};

// formats arrayed fraction
function convertToNums(arr) {
    if (+arr[1] === 0) throw new Error("Thou shalt not divide by zero");
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