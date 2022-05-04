const wordEl = document.querySelector('#word')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('car parts', 2)

wordEl.textContent = game1.Puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status)

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    wordEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    console.log(game1.status)
})

getPuzzle('5').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`error:${err}`)
})

// convert getcountry to return new promise 
// call getcountry and use then to print country name or the error 

getCountry('US').then((country) => {
    console.log(`Country name: ${country.name}`)
}, (error) => {
console.log(`Error: ${error}`)
})