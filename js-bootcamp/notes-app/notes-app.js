
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

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})