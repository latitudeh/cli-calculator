const prompts = require("prompts");
const figlet = require("figlet");

console.clear();

const loading = require('loading-indicator');
 
const timer = loading.start('Loading...');

setTimeout(() => {
  loading.stop(timer);
  app();
}, 3000);

const app = () => {
    console.clear();

    const logo = async () => {
        await console.log(figlet.textSync('calculator', {
            font: 'Small',
            width: 40,
        }));
    };

    logo();

    const dashboard = [
        {
            type: "autocomplete",
            name: "value",
            message: "What do you want to do?",
            choices: [
                { title: "Add" },
                { title: "Subtract" },
                { title: "Multiply" },
                { title: "Divide" },
            ],
        },
    ];

    let d = prompts(dashboard);
};

module.exports = app;
