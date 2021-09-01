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
      initial: "46"
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
      initial: "47"
    },
  ];

  let muKT = await prompts(muAkT);

  console.log("");
  console.log(" [=] result:", muK.mu * muKT.mt);

  askFinish();
};

module.exports = multiply;