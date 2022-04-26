# Difference between return values and the callback pattern

### We cannot use return because we had to wait for the information to be ready, andrew mentioned that a thousand lines of code can run before we even get our http request back. Instead with the callback pattern we can wait for the information to be ready and then call the information back when the event listener fires. 