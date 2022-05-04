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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`error:${err}`)
})


//convert getcountry to use fetch and return a promise
// make sure getcountry still resolves with the country that matches
// change the get country usage to use catch

getCountry('US').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`error:${err}`)
})

// getCountry('MX').then((country) => {
//     console.log(country.name)
// }, (err) => {
// console.log(`Error: ${err}`)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })
