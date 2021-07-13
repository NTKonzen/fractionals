function findCommonDiv(arr) {
    let foundDiv = false;
    let divMap = {};
    arr.forEach(v => {
        for (let i = 2; i <= v; i++) {
            if (v % i === 0) {
                let k = divMap[i];
                divMap[i] = k ? k += 1 : 1;
            };
        }
    });
    Object.entries(divMap).forEach(([k, v]) => {
        if (v > 1) foundDiv = k;
    });
    return foundDiv;
};

function convertToNums(arr) {
    let num = 0;
    if (!arr[1]) arr[1] = 1;
    if (arr[0].includes("_")) {
        num = +arr[0].split("_")[0];
        arr[0] = +arr[0].split("_")[1] + (num * arr[1]);
    };
    arr = arr.map(v => +v)
    return arr;
};

function convertToMixed(arr) {
    if (arr[0] === arr[1]) return 1;
    else if (arr[0] > arr[1]) {
        let num = Math.floor(arr[0] / arr[1]);
        arr[0] = arr[0] - (num * arr[1]);
        return `${num}_${arr[0]}/${arr[1]}`
    };
    return arr.join('/');
}

module.exports = { findCommonDiv, convertToNums, convertToMixed };