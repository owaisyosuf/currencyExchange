#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name:'amount',
    message:'enter your amount',
    type:'number'
  }
]);

let fromCurrency=currency[answer.from]
let toCurrency= currency[answer.to]
let userAmount=answer.amount
let basedCurrency=userAmount/fromCurrency
let convertedAmount=basedCurrency*toCurrency


// console.log(fromCurrency);
// console.log(toCurrency);
// console.log(userAmount);
// console.log(basedCurrency);
console.log(Math.floor(convertedAmount));




