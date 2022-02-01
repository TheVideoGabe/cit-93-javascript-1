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

console.log(`${myBook.title} by ${myBook.author}`)
showOnPage(`${myBook.title} by ${myBook.author}`)

myBook.title = `Animal Farm`

console.log(`${myBook.title} by ${myBook.author}`)
showOnPage(`${myBook.title} by ${myBook.author}`)

// challenge
//name, age, location

let person = {
    name: 'Gabriel',
    age: 23,
    location: 'Fresno'
}

console.log(`My name is ${person.name} and Im ${person.age}, I also live in ${person.location}.`)
showOnPage(`My name is ${person.name} and Im ${person.age}, I also live in ${person.location}.`)

person.age = 24

console.log(`My name is ${person.name} and Im ${person.age}, I also live in ${person.location}.`)
showOnPage(`My name is ${person.name} and Im ${person.age}, I also live in ${person.location}.`)

// Andrew's solution
let me = {
    name: 'andrew',
    age: 27,
    location: 'Philly'
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
showOnPage(`${me.name} is ${me.age} and lives in ${me.location}.`)
me.age = me.age + 1
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
showOnPage(`${me.name} is ${me.age} and lives in ${me.location}.`)
