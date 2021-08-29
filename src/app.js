const prompts = require("prompts");
const figlet = require("figlet");
const add = require("./add");

console.clear();
const loading = require("loading-indicator");

const timer = loading.start("Loading...");

setTimeout(() => {
  loading.stop(timer);
  app();
}, 3000);

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
        message: 'What do you want to do?',
        choices: [
          { title: 'Add', description: '[+] Adds Numbers', value: 'add'},
          { title: 'Subtract', description: '[-] Subtract Numbers', value: 'subtract' },
          { title: 'Divide', description: '[/] Divide Numbers', value: 'divide' },
          { title: 'Multiply', description: '[*] Multiply Numbers', value: 'multiply' },
        ],
      }
  ];

  let d = await prompts(dashboard);

  switch (d.ak) {
      case 'add':
          await add();
          break;
  }
    
};

module.exports = app;
