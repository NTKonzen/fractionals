function findCommonDenom(arr) {
    let foundDenom = false;
    let denomMap = {};
    arr.forEach(v => {
        for (let i = 2; i <= v; i++) {
            if (v % i === 0) {
                let k = denomMap[i];
                denomMap[i] = k ? k += 1 : 1;
            };
        }
    });
    Object.entries(denomMap).forEach(([k, v]) => {
        if (v > 1) foundDenom = k;
    });
    return foundDenom;
}

module.exports = { findCommonDenom };