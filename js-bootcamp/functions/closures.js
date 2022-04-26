const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// adder
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

// tipper
// create a createtipper that takes in a base tip of .15 for 15%
// set it up to return a fucntion that takes in the bill amount
// call create tipper to generate a few functions for different percentages.
// use the generated functions to calculate tips and print them
const createTipper = (baseTip) => {
    return (billAmount) => {
        return baseTip * billAmount
    }
}
// tips 15 and 10 percent out of 100$
const tip15 = createTipper(.15)
const tip10 = createTipper(.10)
console.log(tip15(100))
// prints 15
console.log(tip10(100))
// prints 10