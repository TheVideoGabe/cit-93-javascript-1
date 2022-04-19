// setup new status property with "playing"value
// create method for calculating status of "playing" "finished or "failed"
// call method after every guess
// use cosole.log to print toconsole

// start game, see 'playing' printing
// make 2 mistakes see "failed"
// refresh browser and answer correctly see "finished"



const wordEl = document.querySelector('#word')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat', 2)

wordEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses
console.log(game1.status)

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    wordEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
    console.log(game1.status)
})