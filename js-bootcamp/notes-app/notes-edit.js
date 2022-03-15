const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    localStorage.setItem('notes', JSON.stringify(notes))
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    localStorage.setItem('notes', JSON.stringify(notes))
})

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    localStorage.setItem('notes', JSON.stringify(notes))
    location.assign(`index.html`)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find(function (note) {
            return note.id === noteId
        })
        
        if (note === undefined) {
            location.assign('index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
    }
})