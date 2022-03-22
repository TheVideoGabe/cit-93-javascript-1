const products = [{name: 'thing'}]
const product = products[0]

// truthy - values that resolve to true in a boolean context.
// falsy - values that resolve to false in a boolean context.
// Falsy values - false, 0, null, undefined. An empy string. empty constants. Also NaN (non valid operations).
// truthy everything that is not the values above. Even Empty objects and arrays.

if (product) {
    console.log('product found')
} else {
    console.log('Product not found')
}

