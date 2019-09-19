var choices = ["Goku","Vegeta","Gohan","Bulma","Piccolo","Kami","Krillin"];
var word = choices[Math.floor(Math.random() * choices.length)];
var correctGuess = [];
var incorrectGuess = [];
var underscore = [];
var remainingGuess = 10;
var startScore = 0;

// This will be where we grab the containers from our index.html in order to push data into them
var blank = document.getElementById("blank");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var guess = document.getElementById("guess");
var score = document.getElementById("score");

score.textContent = startScore;
guess.textContent = remainingGuess;

function pushUnderscore() {
    for (var i = 0; i < word.length; i++) {
        underscore.push("☠");
    };
};

pushUnderscore();

blank.textContent = underscore.join(" ");

function reset () {
    word = choices[Math.floor(Math.random() * choices.length)];
    correctGuess = [];
    incorrectGuess = [];
    underscore = [];
    remainingGuess = 10;
    startScore = 0;
    pushUnderscore();
};

document.onkeyup = function (event) {
    var keycode = event.keyCode;
    var letter = event.key;
    
    if(event.which >= 65 && event.which <= 90) {
        if(word.indexOf(letter) > -1) {
            correctGuess.push(letter);
            correct.textContent = correctGuess.join(" ");
            for (var i = 0; i < word.length; i++) {
                if (letter === word[i]) {
                    underscore[i] = letter;
                    blank.textContent = underscore.join(" ");
                };
            };
        }
        else {
            remainingGuess --
            guess.textContent = remainingGuess;
            incorrectGuess.push(letter);
            incorrect.textContent = incorrectGuess.join(" ");
        };
    }
    else {
        alert("Do you know what a letter is?");
    }
    if(!underscore.includes("_ ")) {
        alert("Winner!");
        startScore++
        score.textContent = startScore
        reset();
    }
    if(remainingGuess === 0) {
        alert ("Loser!");
        reset();
    };
};

