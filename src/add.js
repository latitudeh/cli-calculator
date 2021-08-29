const prompts = require("prompts");

const add = async () => {
  console.clear();
  console.log("");

  const addAk = [
    {
      type: "number",
      name: "add",
      message: "[+] Enter a Number to Add> ",
      style: "default",
      initial: "46"
    },
  ];

  let adK = await prompts(addAk);
};

module.exports = add;

