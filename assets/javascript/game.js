const words = ["Goku","Vegeta","Gohan","Bulma","Piccolo","Kami","Krillin"];
const correctGuess = [];
const incorrectGuess = [];
const underscore = [];
const remainingGuess = 10;
const startScore = 0;

// This will be where we grab the containers from our index.html in order to push data into them
const blank = document.getElementById("blank");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const guess = document.getElementById("guess");
const score = document.getElementById("score");

score.textContent = startScore;
guess.textContent = remainingGuess;

function pushUnderscore() {
    for (var i = 0; i < word.length; i++) {
        underscore.push("☠");
    };
};

blank.textContent = underscore.join(" ")