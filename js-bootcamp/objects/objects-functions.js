const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

  let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
(showOnPage(bookSummary.pageCountSummary))
// Challenge
// create a function that takes fahrenheit and return an object with all 3 temperatures.

let conversion = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5 / 9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
}

let convertedTemps = conversion(32)
console.log(convertedTemps)
(showOnPage(convertedTemps))

// Andrew's solution

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9),
    }
}

let temps = convertFahrenheit(74)
console.log(temps)
(showOnPage(temps))