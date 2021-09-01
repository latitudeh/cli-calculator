const prompts = require("prompts");
const askFinish = require("./askFinish");

const subtract = async () => {
  console.clear();
  console.log("");

  const subtractAk = [
    {
      type: "number",
      name: "su",
      message: "[-] Enter a Number to Subtract> ",
      style: "default",
      initial: "46"
    },
  ];

  let suK = await prompts(subtractAk);

  console.log("");

  const subAkT = [
    {
      type: "number",
      name: "sb",
      message: "[-] Enter a Number to Subtract> ",
      style: "default",
      initial: "47"
    },
  ];

  let suKT = await prompts(subAkT);

  console.log("");
  console.log(" [=] result:", suK.su - suKT.sb);

  askFinish();
};

module.exports = subtract;
