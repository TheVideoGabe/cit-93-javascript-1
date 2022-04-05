// create a constructor function for hangman
// setup two attributes one for the word itself and another for guesses allowed
// create 2 instances of it and print both to console

const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('cat', 2)
console.log(game1)

const game2 = new Hangman('New Jersey', 4)
console.log(game2)