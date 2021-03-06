const prompts = require("prompts");
const askFinish = require("./askFinish");

const multiply = async () => {
  console.clear();
  console.log("");

  const multiplyAk = [
    {
      type: "number",
      name: "mu",
      message: "[*] Enter a Number to Multiply> ",
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

  let muK = await prompts(multiplyAk);

  console.log("");

  const muAkT = [
    {
      type: "number",
      name: "mt",
      message: "[*] Enter a Number to Multiply> ",
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

  let muKT = await prompts(muAkT);

  console.log("");
  console.log(" [=] result:", muK.mu * muKT.mt);

  askFinish();
};

module.exports = multiply;