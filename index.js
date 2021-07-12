const inquirer = require("inquirer");

inquirer
    .prompt({
        type: "input",
        name: "input",
        message: "Enter input:"
    })
    .then(({ input }) => {
        console.log(input)
    })