// create a constructor function for hangman
// setup two attributes one for the word itself and another for guesses allowed
// create 2 instances of it and print both to console

const Game = function (word, guesses) {
    this.word = word
    this.guesses = guesses
}

const instance1 = new Game('try', 1)
console.log(instance1)

const instance2 = new Game('again', 2)
console.log(instance2)