const puzzleEl = document.querySelector('#word')
const guessesEl = document.querySelector('#guesses')
let game1

// wordEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    render()
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`error:${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })
