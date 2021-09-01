const prompts = require("prompts");
const askFinish = require("./askFinish");

const add = async () => {
  console.clear();
  console.log("");

  const addAk = [
    {
      type: "number",
      name: "ao",
      message: "[+] Enter a Number to Add> ",
      style: "default",
      validate: value => !isNaN(value) ? `Enter a Number to Subtract` : true
    },
  ];

  let adK = await prompts(addAk);

  console.log("");

  const addAkT = [
    {
      type: "number",
      name: "at",
      message: "[+] Enter a Number to Add> ",
      style: "default",
      validate: value => !isNaN(value) ? `Enter a Number to Subtract` : true
    },
  ];

  let adKT = await prompts(addAkT);

  console.log("");
  console.log(" [=] result:", adK.ao + adKT.at);

  askFinish();
};

module.exports = add;

