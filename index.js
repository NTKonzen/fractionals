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

        // Turn input into array with translated operands
        let inputArr = input
            .trim()
            .split(/\s+/)
            .map(val => operandMap[val] ? operandMap[val] : val);

        // run operand function
        let result = opFuncs[inputArr[1]](inputArr[0], inputArr[2]);

        console.log(result);
    })
    .catch(err => {
        console.log(err.message)
    })