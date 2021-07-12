const inquirer = require("inquirer");

inquirer
    .prompt({
        type: "input",
        name: "input",
        message: "Enter input:"
    })
    .then(({ input }) => {
        if (/[^\d*\/+-_ ]/.test(input)) throw new Error("Input must only include numbers, operands, spaces, and underscores");
    })
    .catch(err => {
        console.log(err.message)
    })