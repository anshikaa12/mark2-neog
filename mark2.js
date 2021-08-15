const chalk = require('chalk');
var readLineSync = require('readline-sync')
const error = chalk.keyword('red');
const correct = chalk.keyword('green');
console.log(chalk.cyan("----------------------------------------------"));
console.log(chalk.redBright.bold("    🤩 WELCOME! TO THE ULTIMATE FRIENDS TRIVIA 🤩"));
console.log(chalk.cyan("----------------------------------------------"));
var username = readLineSync.question("What is your name? ");
console.log(chalk.yellow("Hi " + username + " !"));
console.log("Let's see if you are a true FRIEND'S fan 🥰");

var leaderBoard = [{ name: "Anshika", score: 5 }, { name: "Aryan", score: 4 }, { name: "tanya", score: 3 }];

var questions = [{ question: "Q1. how many sisters joey have?", option1: 6, option2: 7, answer: "b" }, {
    question: "Q2. how many times ross has been married?", option1: 5, option2: 3, answer: "b"
}, {
    question: "Q3. what nickname did monica's dad give her? ", option1: "tiny electronica", option2: "little harmonica",
    answer: "a"
}, {
    question: "Q4. What's phoebe's sister name?", option1: "ursula", option2: "ariel",
    answer: "a"
}, {
    question: "Q5. what is rachel scared of?", option1: "swings", option2: "dogs",
    answer: "a"
}];
var score = 0;
function play(question, answer) {

    var q = readLineSync.question("choose one: ");
    if (q.toLowerCase() == answer) {
        console.log(correct("✅ This is correct!"));
        score++;
    } else {
        console.log(error("😞 This is incorrect!"));
    }
}
for (var i = 0; i < questions.length; i++) {
    var currentq = questions[i];
    console.log(currentq.question);
    console.log(chalk.blue("a) " + currentq.option1));
    console.log(chalk.blue("b) " + currentq.option2));
    play(currentq.question, currentq.answer);

}

console.log("Your final score is : " + score + "/5 🤩");
f = 0;
var a = { name: username, score: score };
for (var j = 0; j < leaderBoard.length; j++) {
    var c = leaderBoard[j];
    if (score >= c.score) {
        f = 1;
        leaderBoard.splice(j, 0, a);
        break;
    }
}
if (f === 0) {
    leaderBoard.push(a);
}
console.log(chalk.yellow("------------------------------"));
console.log(chalk.yellow("         🥳LEADERBOARD🥳           "));
for (var k = 0; k < leaderBoard.length; k++) {
    console.log(leaderBoard[k].name + "     - " + leaderBoard[k].score);
}
console.log(chalk.yellow("------------------------------"));
console.log("THANKYOU FOR PLAYING!");
