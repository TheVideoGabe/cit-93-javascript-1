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
const getDataPromise = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is my success data ${data}`)
            // reject('this is my promise error')
            // reject('this is my promise error')
        }, 2000)
    })
}

const myPromise = getDataPromise(123)
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