var wins = 0;
var losses = 0;
var guessesLeft, guessLetters, letterToGuess;
//var message = "Guess what letter I'm thinking of? You get 9 guesses, type letter on keyboard to guess.";
//An array of letters.
var letters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"
    ];
document.addEventListener("keyup", "keyPress", false);
resetGame();
// display();

//document.onkeyup = function(event) {
  function keyPress(event) {
    console.log("keyPress function");
    var guess = event.key;
    console.log("key pressed " + guess);
    if (guess === letterToGuess) {
      win();
    } else if (guessesLeft - 1 === 0) {
      lost();
    } else {
      fail(guess);
    }
  
    // display();
  }

 document.getElementById("fuck-this").innerHTML = "what the fuck";

  // function display() {
  //   var winsP = document.getElementById("wins");
  //   var lossesP = document.getElementById("losses");
  //   var guessLeft = document.getElementById("guessLeft");
  //   var letterGuessed = document.getElementById("guessed");
  //   winsP.innerHTML = wins;
  //   lossesP.innerHTML = losses;
  //   guessLeft.innerHTML = guessesLeft;
  //   letterGuessed.innerHTML = guessedLetters.join(',');
  // }
  
  function win() {
    wins++;
    resetGame();
  }
  
  function lost() {
    losses++;
    resetGame();
  }
  
  function fail(letter) {
    guessesLeft--;
    guessedLetters.push(letter);
  }
  
  function resetGame() {
    guessesLeft = 9;
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Letter to guess: " + letterToGuess);
  }

  //I don't know why it's not working