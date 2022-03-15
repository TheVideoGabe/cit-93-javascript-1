const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('index.html')
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body

// setup input event for title
// update note object and save notes list
// repeat steps 1-2 for body
// setup a remove button that remotes notes and sends uses back to home page


document.querySelector('#note-title').addEventListener('input', function (e) {
    note.title = e.target.value
    localStorage.setItem('notes', JSON.stringify(notes))
})

document.querySelector('#note-body').addEventListener('input', function (e) {
    note.body = e.target.value
    localStorage.setItem('notes', JSON.stringify(notes))
})

document.querySelector('#remove-note').addEventListener('click', function (e) {
    removeNote(note.id)
    localStorage.setItem('notes', JSON.stringify(notes))
    location.assign(`index.html`)
})

