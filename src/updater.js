const axios = require('axios');
const version = require("../version.json");
const { execSync } = require("child_process");
const chalk = require("chalk");

const update = async () => {
    axios.get('https://raw.githubusercontent.com/QWERTY-js/cli-calculator/main/version.json')
        .then(async function (response) {
            if (response.data.version < version.version) {
                await execSync('git pull', { encoding: "utf8" });

                console.clear();
                const loading = require("loading-indicator");

                const timer = loading.start("Updating...");

                setTimeout(() => {
                    loading.stop(timer);
                    const app = require("../app");
                    app();
                }, 2000);
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
                console.log(chalk.red("Fatal Error"));
            }
        })
        .catch(function (error) {
            console.log(error);
        })
};

module.exports = update;

// Created by Zallow's dev and BooleanTrue