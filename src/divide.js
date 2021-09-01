const prompts = require("prompts");
const askFinish = require("./askFinish");
const chalk = require("chalk");

const divide = async () => {
    console.clear();
    console.log("");

    const divideAk = [
        {
            type: "number",
            name: "di",
            message: "[/] Enter a Number to Divide> ",
            style: "default",
            validate: value => {
                if (!isNaN(value) && value !== "") {
                  return true;
                } else {
                  return 'Enter a valid number';
                }
              }
        },
    ];

    let diK = await prompts(divideAk);

    console.log("");

    const diAkT = [
        {
            type: "number",
            name: "dv",
            message: "[/] Enter a Number to Divide> ",
            style: "default",
            validate: value => {
                if (!isNaN(value) && value !== "") {
                  return true;
                } else {
                  return 'Enter a valid number';
                }
              }
        },
    ];

    let diKT = await prompts(diAkT);

    console.log("");

    if (diKT.dv == 0) {
        console.log(chalk.red("An error has occurred"));
    } else {
        console.log(" [=] result:", diK.di / diKT.dv);
    }

    askFinish();
};

module.exports = divide;