# The difference between local Storage data and RAM data from our notes app is:

## Local storage:

### Data stored in our local storage will remain accesible even after we turn off our device because it was written on our device's storage like ssd or hdd.

## Random Access Memory:

### Data stored on our RAM can be accessed anytime during the current session but will be lost when we turn off our device because its temporary data.

# Thoughts on refactoring functions

### All files share a global name space.

### Javascript files on html run in order. This is why order is important.

### I can see how refactoring can be used to group functions that work together on a separate .JS file to minimize code on the main .Js file that you will be working on.

### I also thought that refactoring functions into separate Js file as a means to only change the code on the secondary file when you need to change functionalities is cool. Not having to change the details on the main file can be a great time saver.

# syncing pages

### Syncing across pages can be very useful to keep all data up-to-date for certain apps. ex. calendars.

# When to use Arrow functions

### We can use arrow functions to simplyfy our code and over time it will help us write code faster.

# Rules to Arrow Functions

### When there is a single line of code inside a function (like a return) we can use short hand syntax to get rid of the function body and just have the expression we want to return.

### If a function has multiple lines of code we can only get rid of the function statement and replace it with an arrow function to simplyfy our code.

# Truthy and Falsly Understanding.

### Falsly values that resolve to false in a boolean context. They include false, the number 0 (but "0" inside of a string is truthy), null, undefined, empty strings, empty constants and also NaN (non valid operations). These are all falsly values when put inside of a boolean context.

### Truthy values that resolve to true in a boolean context are everything that is not the values above. Even Empty objects and arrays.

# OOP Notes

### Programming that focuses on code re-usability

### like a method inside of an object that can be used again to create a new string using the same method.

### we can create functions that serve as a template (instances) and call built in methods without re writting everything again. 

### every instance that we create will have access to the same amount of methods.

### Javascript uses this logic internally behind the scenes.

### constructor functions start with capital letters to make it a bit more obvious that we are creating a constructor function.

### Using arrow functions doesn't bind .this to our constructor functions so they can't be written that way.

# How This. Works:

### In an object method, this. targets the object.
### By itself, this. targets the global object.
### Inside a function, this. refers to the global object.
### In a function, in strict mode, this. is undefined.

### Prototype inheritance is a way for one object to have get the properties of another object.

# Video 93

### The prototype property is for internal use only, we cant seeit we try to access it on an object. 

### the prototype property is what creates the relationship between instance and the methods we can access.

### It allows instances to follow the prototype chain to look for methods.

### Javascript instances work differently compared to Java or C++. Everychange made to a prototype is reflected in every instance.

### its important to know how prototypal inheritance works behind the scenes because most things in javascript are objects.

# Video 94

### hasownproperty returns true or false

### everytime we use a .example method we are accessing them via prototypal inheritance.

### The prototype chain is built into javascript: Functions -> .methods -> null

### we can use __Proto__ in the browser to visualize the protoype chain.

### literal syntax can be used to create a new objects

### There a many ways to build objects but using javascript's built in literal syntax to do so is best.

# Video 95 

### A primitive value is a value without properties, a non object

### There are 5 primitive values in javascript

### Array Prototype chain: myArray -> array.prototype -> object.prototype -> null

### function prototype chain: my func -> function.prototype -> object.prototype -> null

### this proves that both arrays and functions are objects.

### Object wrappers give primitive values functionality

### string: my string -> string.prototype -> object.prototype -> null 

### the same process above happens for all primitive values. Except Null & Undefined.