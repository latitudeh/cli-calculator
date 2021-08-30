const prompts = require("prompts");
const loading = require("loading-indicator");

const askFinish = async () => {
    const app = require("./app");
    console.log("");

    const ask = [
        {
            type: 'select',
            name: 'a',
            message: '[~] Do you want to go back to the main menu?',
            choices: [
                { title: 'no', description: 'exit', value: 'no' },
                { title: 'yes', description: 'go back', value: 'yes' },
            ],
        }
    ]

    let pAskFinish = await prompts(ask);

    switch (pAskFinish.a) {
        case "yes":
            await app();
            break;
        case "no":
            const timer = loading.start("Leaving...");
            setTimeout(() => {
                loading.stop(timer);
            }, 3000);
            console.log("");
    }
};

module.exports = askFinish;



