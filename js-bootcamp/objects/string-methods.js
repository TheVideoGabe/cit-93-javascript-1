const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

let name = ' Andrew Mead'

// length property
console.log(name.length)
showOnPage(name.length)

//convert to uppercase
console.log(name.toUpperCase())
showOnPage(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())
showOnPage(name.toLowerCase())

// includes method 
let password = 'abc123asdf098'
console.log(password.includes(`password`))
showOnPage(password.includes(`password`))

// trim
console.log(name.trim())
showOnPage(name.trim())

// challenge

//length is 8 characters or more and it doesnt contiain the word password
let passwordChallenge = function (password) {
    if (password.length >= 8) {
        return true
    } else if (password.includes('password')){
        return true
    } else {
        return false
    }
}

console.log(passwordChallenge('asdp'))
showOnPage(passwordChallenge('asdp'))
console.log(passwordChallenge('abc123!@#$%^&'))
showOnPage(passwordChallenge('abc123!@#$%^&'))
console.log(passwordChallenge('asdpasdfpoijpassword'))
showOnPage(passwordChallenge('asdpasdfpoijpassword'))

// Andrews solution

let isValidPassword = function (password) {
    if (password.length >= 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(passwordChallenge('asdp'))
showOnPage(passwordChallenge('asdp'))
console.log(passwordChallenge('abc123!@#$%^&'))
showOnPage(passwordChallenge('abc123!@#$%^&'))
console.log(passwordChallenge('asdpasdfpoijpassword'))
showOnPage(passwordChallenge('asdpasdfpoijpassword'))