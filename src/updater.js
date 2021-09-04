const axios = require('axios');
const version = require("../version.json");
const chalk = require("chalk");
const path = require("path");

const update = async () => {
    await axios.get('https://raw.githubusercontent.com/QWERTY-js/cli-calculator/main/version.json')
        .then(async function (response) {
            if (response.data.version > version.version) {
                console.clear();

                const child = require('child_process').exec('git pull origin main', { cwd: path.dirname(__dirname)});
                const loading = require("loading-indicator");
                loading.start("Updating...");

                await new Promise((resolve) => {
                    child.on('close', resolve)
                });
                
                setTimeout(() => {
                    console.log(chalk.green("Updated! Restart the app"));
                    process.exit();
                }, 100);
            } else if (response.data.version == version.version) {
                console.clear();
                const loading = require("loading-indicator");

                const loadingApp = loading.start("Loading...");

                setTimeout(() => {
                    loading.stop(loadingApp);
                    const app = require("../app");
                    app();
                }, 1600);
            } else {
                console.log(chalk.red("Could not check the program version.\nPlease clone the calculator in another folder in case you want to use the program"));
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

module.exports = update;

// Created by Zallow's dev and BooleanTrue