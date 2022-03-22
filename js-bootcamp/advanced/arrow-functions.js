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

// challenge vid 80
// find person with age of 22
// print that persons name

const find = people.filter((person) => person.age === 25)

console.log(find)
