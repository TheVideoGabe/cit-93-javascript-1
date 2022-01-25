const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

// multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)
showOnPage(result)

// default arguments
let getScoreText = function (name = 'ANON', score = 0) {
   return `Name: ${name} - score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
    console.log(scoreText)
    showOnPage(scoreText)

    // challenge
    let totalBill = function (bill = 40, tip = bill * .2) {
        //separate
        //return 'Bill: ' + bill + ' tip: ' + tip;

        // together
        return 'Bill and Tip: ' + (bill + tip)
    }
    //let getTip = totalBill ()
    // console.log(getTip)
    // showOnPage(getTip)

    // actual solution and now challenge #2
    let getTip = function (total, tipPercent = .2) {
        let percenttage = tipPercent * 100
        let tip = total * tipPercent
        return `a ${percenttage}% tip on ${total} would be ${tip}`
    }

    let tip = getTip(40, .25)
    console.log(tip)
    showOnPage(tip)