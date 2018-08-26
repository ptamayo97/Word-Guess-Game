


var wordToGuess = ["dog", "cat", "lion", "tiger", "bear", "elephant", "rhinosaurus", "penguin", "coyote", "horse"];
var computerChoice = "";
var underScore = [];
var letters = [];
var wordProgress = [];
var wrongGuesses = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

function startGame() {



    computerChoice = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
    console.log(computerChoice);

    guessesLeft = 9;
    wrongGuesses = [];
    wordProgress = [];
    underScore = []


    for (let i = 0; i < computerChoice.length; i++) {
        underScore.push('_');
    }
    console.log(underScore)
    document.getElementById("word-blanks").innerHTML = wordProgress.join(" ");
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("win-counter").innerHTML = wins;
    document.getElementById("loss-counter").innerHTML = losses;



    document.onkeyup = function (event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


        if (userGuess == computerChoice) {
            document.getElementById("word-blanks").innerHTML = userGuess;
        }


        function checkGuess(guess) {
            var isUserCorrect = false;
            for (var i = 0; i < underScore; i++) {
                if (computerChoice[i] == letter) {
                    isUserCorrect = true;
            }
        }

        if (isUserCorrect) {


            for (var i = 0; i < underScore; i++) {
                if (computerChoice[i] == guess) {
                    wordProgress[i] = guess;
                }
            }
        }
        else {
            wrongGuesses.push(guess)
            guessesLeft--;
        }
        
    }
    
    
    function userWin() {
        console.log("win Count " + wins + " | Loss Count: " + losses + " | Guesses Left: " + guessesLeft)

        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("word-blanks").innerHTML = wordProgress.join(" ");
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
        if (letters.toString() == wordProgress.toString()) {
            wins++;
            alert("You Win!")
            document.getElementById("win-counter").innerHTML = winCount;
            startGame();
        } else if (guessesLeft == 0) {
            losses++;
            alert("You Lose!");
            document.getElementById("loss-counter")
            startGame();
        }
    }
    





}
startGame();

