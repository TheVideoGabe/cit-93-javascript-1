// primitive values string, number, boolean, null, undefined.


//Object: product -> object.prototype -> null
// Array: myArray -> array.prototype -> object.prototype -> null
// function: my func -> function.prototype -> object.prototype -> null
// string: my string -> string.prototype -> object.prototype -> null 
// Number: my number -> number.prototype -> object.prototype -> null 
// boolean: my boolean -> boolean.prototype -> object.prototype -> null 


// const product = 'computer'
// console.log(product.split(''))

// const otherProduct = new String('phone')
// console.log(otherProduct)

const wordEl = document.querySelector('#word')
const guessesEl = document.querySelector('#guesses')
wordEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses


window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    wordEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
})