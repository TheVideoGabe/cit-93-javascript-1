const { promisify } = require("util")

//callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('this is my callback error', undefined)
        callback('this is my callback error', undefined)
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.Console(data)
    }
})

// promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is the data')
        reject('this is my promise error')
        reject('this is my promise error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})