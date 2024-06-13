#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
// Function to start the game
function startGame() {
    console.log(chalk.cyan(figlet.textSync("Number Guessing Game")));
    let score = 0;
    let playAgain = true;
    const spinner = ora(chalk.green("Loading game...")).start();
    setTimeout(() => {
        spinner.stop();
        playGame();
    }, 2000);
    async function playGame() {
        while (playAgain) {
            const randomNumber = Math.floor(Math.random() * 6 + 1);
            const answer = await inquirer.prompt([
                {
                    name: "userGuessedNumber",
                    type: "number",
                    message: chalk.yellow("Please guess a number between 1-6:"),
                },
            ]);
            if (answer.userGuessedNumber === randomNumber) {
                console.log(chalk.bold.magenta("Congratulations! You guessed the right number."));
                score++;
            }
            else {
                console.log(chalk.red(`You guessed the wrong number. The correct number was ${randomNumber}.`));
            }
            console.log(chalk.green(`Your current score is: ${score}`));
            const playAgainAnswer = await inquirer.prompt([
                {
                    name: "playAgain",
                    type: "confirm",
                    message: "Do you want to play again?",
                    default: false,
                },
            ]);
            playAgain = playAgainAnswer.playAgain;
        }
        console.log(chalk.cyan("Thank you for playing! Your final score is: " + score));
    }
}
startGame();
