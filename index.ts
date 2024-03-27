#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game");

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6:",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations! you guessed right number");
} else {
  console.log("You guessed wrong number");
}
