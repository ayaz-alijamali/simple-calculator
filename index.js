#! /usr/bin/env node

import inquirer from "inquirer";
const aswer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//console.log( aswer );
if (aswer.operator === "Addition") {
    console.log(+aswer.firstNumber + aswer.secondNumber);
}
else if (aswer.operator === "Subtraction") {
    console.log(aswer.firstNumber - aswer.secondNumber);
}
else if (aswer.operator === "Multiplication") {
    console.log(aswer.firstNumber * aswer.secondNumber);
}
else if (aswer.operator === "Division") {
    console.log(aswer.firstNumber / aswer.secondNumber);
}
else
    ("please select valid operator");
