// type coercion - string, number, boolean
// we avoid strings and numbers. focus on booleans for truthy and falsy
// loose equality is almost never used

// console.log('5' + 5)
// console.log('5' - 5)
// console.log('5' === 5)

const value = true + 12
const type = typeof value

console.log(type)
console.log(value)