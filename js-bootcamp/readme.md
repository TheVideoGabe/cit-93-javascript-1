# Difference between return values and the callback pattern

### We cannot use return because we had to wait for the information to be ready, andrew mentioned that a thousand lines of code can run before we even get our http request back. Instead with the callback pattern we can wait for the information to be ready and then call the information back when the event listener fires. 

# Difference between Sync vs. Async

### Synchronous code runs one after another so it has to wait for each step to be done.

### Asynchronous code runs at the same time as all other code, so it doesn't have to wait for another step to be completed before it runs. This provides a better user experience. 