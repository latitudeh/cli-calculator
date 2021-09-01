const prompts = require("prompts");
const askFinish = require("./askFinish");

const divide = async () => {
  console.clear();
  console.log("");

  const divideAk = [
    {
      type: "number",
      name: "di",
      message: "[/] Enter a Number to Divide> ",
      style: "default",
      initial: "46"
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
      initial: "47"
    },
  ];

  let diKT = await prompts(diAkT);

  console.log("");
  console.log(" [=] result:", diK.di / diKT.dv);

  askFinish();
};

module.exports = divide;