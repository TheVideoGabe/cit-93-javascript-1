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