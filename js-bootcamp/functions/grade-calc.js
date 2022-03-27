let gradeCalc = (score, totalScore) => {
    let percent = (score / totalScore) * 100
    let letterGrade = ''
    if (typeof score && typeof totalScore === 'number') {
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
        return `you got a ${letterGrade} (${percent}%)!`
    } else {
        throw Error('Write Numbers Only')
    }
}



try {
    let result = gradeCalc(15, 20)
    console.log(result)
} catch (e) {
    console.log('Can Only Take Numbers')
}

