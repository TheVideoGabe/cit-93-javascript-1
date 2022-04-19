// create method for making guesses
// should accept a character for guessing
// should add unique guesses to a list of guesses
// should decrement the guesses left if a guess isnt a match


const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLeters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ""
    this.word.forEach((letter) => {
        if (this.guessedLeters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    }) 
    return puzzle
}


Hangman.prototype.guess = function (guess) {
    guess = guess.toLowerCase()

    if (!this.guessedLeters.includes(guess)) {
        this.guessedLeters.push(guess)
    }

    if (!this.guessedLeters.includes(guess) && !this.word.includes(guess)) {
        this.remainingGuesses = this.remainingGuesses - 1
    }
}

const game1 = new Hangman('cat', 2)
// guess c, t and z
game1.guess('c')
game1.guess('t')
game1.guess('z')
console.log(game1.getPuzzle()) // c*t
// print remaining guesses (value of 1)
console.log(game1.remainingGuesses)

const game2 = new Hangman('New Jersey', 4)
// guess w
game2.guess('w')

console.log(game2.getPuzzle()) //**w ******/
console.log(game2.remainingGuesses)
