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
// Andrews solution

const person = people.find((person) => person.age === 25)

console.log(person.name)

//video 80 response
// I dont think you would need to use the foreach function for the challenge if you use the find function.