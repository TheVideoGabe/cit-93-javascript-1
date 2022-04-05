// set up word instance property as an array of lower case letters
// set up another instance property to store guessed letters
// create a method that gives you the word puzzle back

// no guesses? -> ***
// guessed 'c', 'b', and 't'? -> c*t


const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guesses = ['e',]
}

Hangman.prototype.getPuzzle = function () {
    let hidden = ""
    this.word.forEach((guess) => {
        if (this.guesses == (guess)) {
            hidden = hidden + guess
        } else {
            hidden = hidden + "*"
        }

    }) 
    return hidden
}

const game1 = new Hangman('cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4)
console.log(game2.getPuzzle())