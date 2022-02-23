
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain',
}, {
    title: 'Habbits to work on',
    body: 'Playing guitar more often',
}, {
    title: 'Office modification',
    body: 'Get a new chair',
}]

// Dom document object model

// const p = document.querySelector('p')
// p.remove()

//Query All and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = "*Censored*"
    // console.log(p.textContent)
    // p.remove()
})

// add new element

const newParagraph = document.createElement('p')
newParagraph.textContent = 'this is a new paragraph'
document.querySelector('body').appendChild(newParagraph)