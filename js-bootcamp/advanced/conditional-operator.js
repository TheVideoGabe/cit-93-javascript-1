// const myAge = 27
// let message = myAge >= 18 ? 'you can vote!' : 'you cannot vote.'
// console.log(message)

const myAge = 21
const showPage = () => {
    return 'showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Gabriel',]

// print team size :3 if less than or equal to four
// print too many people on your team otherwise

const goodTeamSizeIs = () => {
    return 'Team size: 3'
}
const badTeamSize = () => {
    return 'Too many people on your team'
}

const rules = team.length <= 4 ? goodTeamSizeIs() : badTeamSize()

console.log(rules)