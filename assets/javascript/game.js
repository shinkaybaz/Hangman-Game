// Variables

var wordOptions = ["tyrion", "daenerys", "cersei", "khal"];
// var dashes = [];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



// Functions

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    console.log(lettersInWord);


    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];


    // loops
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Game with html
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

}


// testing
console.log(selectedWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);

function checkLetters(letter) {
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] === wordOptions) {
            blanksAndSuccesses[i] = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        numGuesses--
    }
}


function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft)

    // uopdate html
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");



    // check if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!");

        // win in html
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();

    }

    // lost 
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!");

        // lost in html
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }

}

// main process

// code initiation 
startGame();

// keys
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}




















