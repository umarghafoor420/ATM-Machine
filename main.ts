import inquirer from "inquirer";
let myBalance = 100000; //Doller
let myPin = 4200;
let pinanswer = await inquirer.prompt([
  {
    name: "pinanswer",
    message: "Enter your pin:",
    type: "number",
  },

]);
if (pinanswer.myPin=== myPin)
console.log(" please  enter correct pin !!");

let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "plz select option",
    type: "list",
    choices: ["withdraw", "check Balance", "Fast Cash", "Transfer Money"],
  },
]);
if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "enter your amount:",
      type: "number",
    },
  ]);

  myBalance -= amountAns.amount;
  console.log("your current balance is:" + myBalance);
} else if (operationAns.operation === "check Balance")
  console.log("your balance is:" + myBalance);
if (operationAns.operation === "Fast Cash") {
  let FastCashAns = await inquirer.prompt([
    {
      name: "FastCash",
      type: "list",
      message: "chose amount:",
      choices: [1000, 5000, 10000, 20000, 40000, 50000],
    },
  ]);
  myBalance -= FastCashAns.FastCash;
  console.log("your Current Balance is:" + myBalance);
} else if (operationAns.operation === "Transfer Money") {
  let TransferMoney = await inquirer.prompt([
    {
      name: "TransferMoney",
      type: "list",
      message: "Chose Would You Like To Transfer Money",
      choices: ["UMAR", "USAMA", "A.GHAFOOR", "ABDULLAH", "MURTAZA", "SHAFINE"],
    },
  ]);
  let condition = true;
  {
    let TransferMoney = await inquirer.prompt([
      {
        name: "TransferMoney",
        type: "input",
        message: "ARE YOU SHOURE YOU WANT TO TRANSFER MONEY",
        condtion: true,
      },]);}
  if (operationAns.operation === "Transfer Money") {
    let TransferAns = await inquirer.prompt([
      {
        name: "TransferMoney",
        type: "list",
        message: "ENTER AMOUNT THAT YOU WANT TO TRANSFER:",
        choices: [1000, 2000, 5000, 10000, 20000, 40000],},]);
    myBalance -= TransferAns.TransferMoney;
    console.log("your Current Balance is:" + myBalance);}}
