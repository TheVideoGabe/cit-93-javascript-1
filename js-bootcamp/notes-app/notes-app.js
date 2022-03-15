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

//unix epic - january 1st 1970 00:00:00
// 0 is now. 1000 milliseconds is a second.

// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)

// console.log(myDate.getFullYear())

// console.log(`year: ${now.getFullYear()}`)
// console.log(`month: ${now.getMonth()}`)
// console.log(`Day of the month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// create 2 dates in the past use string for date
// get timestamps fot both
// find out which comes first and log the time tostring()

const dateOne = new Date('march 1 2017 12:00:00')
const dateTwo = new Date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString())
}
