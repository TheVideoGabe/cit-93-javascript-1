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

// making an http request

const request = new XMLHttpRequest() 

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
        const myCountry = data.find((myCountry) => myCountry.cca2 === countryCode)
        console.log(myCountry.name)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// request.send()

// make new request for all of the countries
// parse the response text to get an array of objects
// find your country object by country code alpha2code property
// print the name property

const countryCode = "US"

request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()
