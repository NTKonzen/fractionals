const inquirer = require("inquirer");
let opFuncs = require("./assets/operationFuncs.js");

let operandMap = {
    "*": "multiply",
    "/": "divide",
    "-": "subtract",
    "+": "add"
}

inquirer
    .prompt({
        type: "input",
        name: "input",
        message: "Enter input:"
    })
    .then(({ input }) => {
        // Filter unexpected characters
        if (/[^\d*\/+-_ ]/.test(input)) throw new Error("Input must only include numbers, operands, spaces, and underscores");

        let inputArr = input
            .split(' ')
            .map(val => operandMap[val] ? operandMap[val] : val);

        opFuncs[inputArr[1]](inputArr[0], inputArr[2]);
    })
    .catch(err => {
        console.log(err.message)
    })