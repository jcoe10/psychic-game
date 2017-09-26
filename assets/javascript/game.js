var wins = 0;
var losses = 0;
var guessesLeft, guessLetters, letterToGuess;
//var message = "Guess what letter I'm thinking of? You get 9 guesses, type letter on keyboard to guess.";
//An array of letters.
var letters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"
    ];

resetGame();
display();

document.onkeyup = function(event) {
//console.log("keyPress function");
    var guess = event.key;
    console.log("key pressed " + guess);
    if (guess === letterToGuess) {
      win();
    } else {
      fail(guess);
    }
  
    
  }

   function display() {
     var winsP = document.getElementById("wins");
     var lossesP = document.getElementById("losses");
     var guessLeft = document.getElementById("guessLeft");
     var letterGuessed = document.getElementById("guessed");
     winsP.innerHTML = wins;
     lossesP.innerHTML = losses;
     guessLeft.innerHTML = guessesLeft;
     letterGuessed.innerHTML = guessedLetters.join(',');
   }
  
   function win() {
     console.log("you won");
      wins++;
      document.getElementById("wins").innerHTML = wins;
      resetGame();
  }
  
  function lost() {
    console.log("you lost");
     losses++;
     document.getElementById("losses").innerHTML = losses;
     resetGame();
  }
  
  function fail(letter) {
    guessesLeft--;
    document.getElementById("guessLeft").innerHTML = guessesLeft;
    guessedLetters.push(letter);
    for (var i = 0; i < guessedLetters.length; i++){
      document.getElementById("guessed").innerHTML = guessedLetters[i];
    }
    if(guessesLeft === 0) {
      lost();
    }    

}
  function resetGame() {
    guessesLeft = 9;
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Letter to guess: " + letterToGuess);
  }

