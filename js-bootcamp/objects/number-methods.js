const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

let num = 103.941

console.log(num.toFixed(2))
showOnPage(num.toFixed(2))

console.log(Math.round(num))
showOnPage(Math.round(num))
console.log(Math.floor(num))
showOnPage(Math.floor(num))
console.log(Math.ceil(num))
showOnPage(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min)) + min
// 0 - .999999 to 10.999999 to 10 - 20
console.log(randomNum)
showOnPage(randomNum)

// challenge 

// 1-5 if true, false if not correct.

let makeGuess = function (guess) {
    let minimum = 1
    let maximum = 5
    let randomNumber = Math.floor(Math.random() * (maximum - minimum)) + minimum
     if (guess === randomNumber) {
        return true
     } else {
         return false
     }
}

console.log(makeGuess(1))
showOnPage(makeGuess(1))