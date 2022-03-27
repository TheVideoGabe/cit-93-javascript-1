let gradeCalc = (score, totalScore) => {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please Provide Numbers Only')
    }
    
        let percent = (score / totalScore) * 100
        let letterGrade = ''

        if (percent >= 90) {
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

        return `You got a ${letterGrade} (${percent}%)!`
    }
}
// we can use e.message to access the error code above.
try {
    let result = gradeCalc(9, 20)
    console.log(result)
} catch (e) {
    console.log(e.message)
}