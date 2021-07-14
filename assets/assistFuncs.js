// Finds and returns GCD (Greatest Common Divisor)
function findCommonDiv(arr) {
    let divMap = {};
    arr.forEach(v => {
        v = Math.abs(v);
        let key = v;
        for (let i = 2; i <= v; i++) {
            if (v % i === 0) {
                if (divMap[key]) divMap[key].push(i)
                else divMap[key] = [i];
                v = v / i
                i = 1;
            }
        }
    });
    let divArr = Object.values(divMap)
    let first = divArr[0];
    let second = divArr[1];
    if (!first || !second) return 1;
    second = second.filter(v => first.includes(v))
    let filteredArr = first
        .filter(v => second.includes(v))
        .filter((v, i) => second[i] === v)
    let foundDiv = 1;
    if (filteredArr.length > 0) foundDiv = filteredArr.reduce((t, v) => t * v)
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