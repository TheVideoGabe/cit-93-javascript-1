
const wordEl = document.querySelector('#word')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('cat', 2)

wordEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()
console.log(game1.status)

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    wordEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
    console.log(game1.status)
})