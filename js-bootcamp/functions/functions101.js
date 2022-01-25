// // function - input (argument), code, output (return variable)

const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  }

// let greetUser = function () {
//     console.log('welcome user')
// }

// greetUser()
// greetUser()
// greetUser()

// let square = function (num) {
//     let result = num * num
//     return result
// }

// let value = square(3)
// let otherValue = square(10)
// console.log(value)
// console.log(otherValue)

// challenge

let convert = function (temp) {
    let conversion = (temp - 32) * 5 / 9
    return conversion
}

let temp1 = convert(32)
let temp2 = convert(68)

console.log(temp1)
console.log(temp2)

showOnPage(temp1)
showOnPage(temp2)