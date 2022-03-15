// read existing notes in local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}


// remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// generate the DOM structure for a note-- takes an argument
// change textEl into an a tag from the span tag to be able to href
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')


    // setup the remove note button
    button.textContent = 'X'
    noteEl.appendChild(button)
button.addEventListener('click', function () {
    removeNote(note.id)
    renderNotes(notes, filters)
})
    //setup the note title text
        if (note.title.length > 0) {
            textEl.textContent = note.title
        } else {
            textEl.textContent = 'Unnamed Note'
        }
        textEl.setAttribute('href', 'edit.html')
        noteEl.appendChild(textEl)
        
        return noteEl
    }
    
    // render app notes
    const renderNotes = function (notes, filters) {
        const filteredNotes = notes.filter(function (note) {
            return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
        })
        
        document.querySelector('#notes').innerHTML = ''
        
        filteredNotes.forEach(function (note) {
            const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}