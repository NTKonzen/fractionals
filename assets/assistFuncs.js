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
}

module.exports = { findCommonDiv };