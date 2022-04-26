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

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})


// making an http request


// const countryCode = "MX"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.cca2 === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place')
//     }
// })

// countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
// countryRequest.send()