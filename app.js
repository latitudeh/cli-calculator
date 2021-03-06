const prompts = require("prompts");
const figlet = require("figlet");
const add = require("./src/add");
const subtract = require("./src/subtract")
const multiply = require("./src/multiply");
const divide = require("./src/divide");
const chalk = require("chalk");
const updater = require("./src/updater")

updater();

const app = async () => {
  console.clear();

  const logo = async () => {
    await console.log(
      figlet.textSync("calculator", {
        font: "Small",
        width: 40,
      })
    );
  };

  logo();

  const dashboard = [
    {
      type: 'select',
      name: 'ak',
      message: (chalk.yellow('What do you want to do?')),
      choices: [
        { title: 'Add', description: '[+] Adds Numbers', value: 'add' },
        { title: 'Subtract', description: '[-] Subtract Numbers', value: 'subtract' },
        { title: 'Divide', description: '[/] Divide Numbers', value: 'divide' },
        { title: 'Multiply', description: '[*] Multiply Numbers', value: 'multiply' },
        { title: (chalk.red.italic.underline('exit')), description: '[›] Quit the Program', value: 'exit' },
      ],
    }
  ];

  let d = await prompts(dashboard);

  switch (d.ak) {
    case 'add':
      await add();
      break;
    case 'subtract':
      await subtract();
      break;
    case 'multiply':
      await multiply();
      break;
    case 'divide':
      await divide();
      break;
  }

};

module.exports = app;
