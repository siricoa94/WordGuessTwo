const choices = ["Goku","Vegeta","Gohan","Bulma","Piccolo","Kami","Krillin"];
const word = choices[Math.floor(Math.random() * words.length)];
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

pushUnderscore();

blank.textContent = underscore.join(" ")

function reset () {
    word = choices[Math.floor(Math.random() * words.length)];
    correctGuess = [];
    incorrectGuess = [];
    underscore = [];
    remainingGuess = 10;
    startScore = 0;
    pushUnderscore();
}

document.onkeypress = function (event) {
    let keycode = event.keyCode;
    let letter = event.key;
    
    if(event.ehich >= 65 && event.which <= 90) {
        if(word.indexOf(letter) > -1) {
            correctGuess.push(letter);
            correct.textContent = correctGuess.join(" ");

        }
        for (var i = 0; i < words.length; i++) {
            if (letter === word[i]) {
                underscore[i] = letter;
                blank.textContent = underscore.join(" ");
            }
        }
    }

}