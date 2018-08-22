
// start game when key is pressed
document.addEventListener('keypress', (event) => {
    console.log(event);
})

// create an array of words to guess
const wordToGuess = ["dog", "cat", "lion", "tiger", "bear", "elephant", "rhinosaurus", "penguin", "coyote", "horse"];
console.log(wordToGuess);

// computer chooses word randomly
let randomNumber = Math.floor(Math.random() * wordToGuess.length);
console.log(randomNumber);  

let computerChoice = wordToGuess[randomNumber];
console.log(computerChoice);

// create underscores based on length of word
let underScore = [];

let createUnderScore = function() {
    for(let i = 0; i < computerChoice.length; i++){
    underScore.push('_');
    }
    return underScore;
}
console.log(createUnderScore())

// get users guess
let userGuess = document.addEventListener('keypress', (event) => {
    console.log(userGuess);   
})

// check if guess is right 



//if guess is right replace underscore with correct guess

// if guess is wrong, move letter to wrong guesses
// if word is guessed completely add point to wins
// if user runs out of guesses and word is not complete, move to losses

