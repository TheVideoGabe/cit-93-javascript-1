let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4();

    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()

// console.log(moment(nowTimestamp).toString())

// create a new moment
// set the month day and year to ur birthday
// use format to print it in the following way jan 6, 1991
const birthday = moment()
birthday.year(1998).month(2).date(28)
console.log(birthday.format('MMM D, YYYY'))
