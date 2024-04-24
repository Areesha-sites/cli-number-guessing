#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
// 1) Computer will generate a random number - Done.
// 2) User input for guessing number - Done.
// 3) Compare user input with computer generated number and show result - Done.

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(chalk.cyan("Welcome to Number Guessing Game"));

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: chalk.yellow("Please guess a number between 1-6:"),
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log(chalk.bold.magenta("Congratulations! you guessed right number"));
} else {
  console.log(chalk.red("You guessed wrong number"));
}
