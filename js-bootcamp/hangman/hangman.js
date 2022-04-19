// display puzzle in browser instead of console
// display the guesses left in the browser
// separate hangman.js from app.js


const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ""
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    }) 
    return puzzle
}


Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}

const game1 = new Hangman('cat', 2)

// console.log(game1.getPuzzle())
// console.log(game1.remainingGuesses)

