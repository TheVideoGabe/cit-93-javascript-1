const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

// undefined for variable

let name 

name = 'jen'

if (name === undefined) {
    console.log('please provide a name')
    showOnPage('please provide a name')
} else {
    console.log(name)
    showOnPage(name)
}

// undefined for function variable
// undefines as the function return value
let square = function (num) {
    console.log(num)
    showOnPage(num)
}

let result = square()
console.log(result)
showOnPage(result)
// null as assigned value
let age = 27

age = null

console.log(age)
showOnPage(age)