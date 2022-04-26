//http (hypertext transfer protocol)
// request - what do we want to do
// response - what was actually done.

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

getPuzzle("5", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})



// const puzzle = getPuzzleSync()
// console.log(puzzle)

// console.log('do something else')


// make new function for getting country details
// call it with two arguments country code and the callback function
// make http request and call the callback with country information
// use the callback to get the country name


getCountry("US", (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(country.name)
    }
})