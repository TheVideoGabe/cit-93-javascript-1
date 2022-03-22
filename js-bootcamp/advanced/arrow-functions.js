const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Gabriel',
    age: 23
}, {
    name: 'Andrew',
    age: 31
}, {
    name: 'Jess',
    age: 25
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const person = people.find((person) => person.age === 25)

console.log(person.name)
