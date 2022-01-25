const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

let grades = function (studentScore, maxScore) {
    let percentage = (studentScore / maxScore) * 100

    if (percentage>= 90) {
        return `student scored an A with a ${percentage}%`
    } else if (percentage >= 80) {
        return `student scored a B with a ${percentage}%`
    } else if (percentage >= 70) {
        return `student scored a C with a ${percentage}%`
    } else if (percentage >= 60) {
        return `student scored a D with a ${percentage}%`
    } else {
        return `student scored an F with a ${percentage}%`
    }
}

let grade = grades (90, 100)
console.log(grade)
showOnPage(grade)

// better solution 

let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent>= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {        
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `you got a ${letterGrade} (${percent}%)!`
}

let result = gradeCalc (5, 20)
console.log(result)
showOnPage(result)