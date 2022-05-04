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

getCountry('US').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`error:${err}`)
})

// create getLocation function which takes no arguments
// setup getLocation to make a request to the url and parse the data
// use getLocation to print the city, region, and country information

getLocation().then((location) => {
    console.log(`You are in located in the ${location.country}. Your region is ${location.region}, and you live in the city of ${location.city}.`)
}).catch((err) => {
    console.log(err)
})