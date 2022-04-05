//product -> object.prototype -> null
const product = new Object ({
    name: 'the art of war'
})

Object.prototype.someNewMethod = () => 'this is a new function'

// hasownproperty
console.log(product.someNewMethod())
console.log(product)