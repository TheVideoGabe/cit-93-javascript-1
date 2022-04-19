// prototypo inheritance
// myperson > person.prototype > object.prototype > null


class Person {
    constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
    }
    getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}


class Employee extends Person{
    constructor(firstName, lastName, age, position, likes, ) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}


// create a class for students extend from person
// track students grade 0-100
// override bio to print a fail pass grade message. 70 and above is pass message else fail message.
// create new method "updateGrade" that takes the amount to add or remove from grade

// create student print status change grade to change status
// print again

class Student extends Person {
    constructor(firstName, lastName, age, likes, grades,) {
        super(firstName, lastName, age, likes)
        this.grades = grades
    }
    updateGrade(points) {
        this.grades += points
    }
    getBio() {
        if (this.grades >= 70) {
            return `${this.firstName} has ${this.grades} and is Passing`
        } else {
            return `${this.firstName} has ${this.grades} and is failing`
        }
    }
}

const newStudent = new Student('gabriel', 'corral', 24, [], 77,)
console.log(newStudent.getBio())
newStudent.updateGrade(-77)
console.log(newStudent.getBio())