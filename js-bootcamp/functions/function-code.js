// global scope convertfarenheittocelcius, tempOne, tempTwo
    // local scope farenheit, celsius
        // local scope is freezing
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
showOnPage(tempOne)
showOnPage(tempTwo)