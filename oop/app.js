const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const hangmanOne = new Hangman('Cat', 2);

puzzleEl.textContent = hangmanOne.getPuzzle()
// guessesEl.textContent = hangmanOne.remainingGuesses;
guessesEl.textContent = hangmanOne.getStatusMessage();
console.log(hangmanOne.status);


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    hangmanOne.makeGuess(guess);
    puzzleEl.textContent = hangmanOne.getPuzzle();
    // guessesEl.textContent = hangmanOne.remainingGuesses;
    guessesEl.textContent = hangmanOne.getStatusMessage();
    console.log(hangmanOne.status);
    

})