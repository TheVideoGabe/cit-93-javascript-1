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