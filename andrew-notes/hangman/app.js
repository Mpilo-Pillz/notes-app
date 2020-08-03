// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle("2").then((puzzle)=> {
    console.log(puzzle);
}, (error) => {
    console.log(`error: ${error}`);
})

// getPuzzle((error, puzzle) => {
//     if (error) {
//         console.log(`error: ${error}`);
//     } else {
//         console.log(puzzle);
//     }
// })

