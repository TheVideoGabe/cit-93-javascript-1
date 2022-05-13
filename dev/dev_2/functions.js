'use strict'
// gets saved input from local storage
const getSavedSuggestions = () => {
    const suggestionsJSON = localStorage.getItem("saved-suggestions");
    return suggestionsJSON ? JSON.parse(suggestionsJSON) : []
}
// save to local storage
const saveSuggestions = (backlog) => {
    localStorage.setItem("saved-suggestions", JSON.stringify(backlog));
}
// refactored render form into a class
class RenderForm {
    constructor(backlog) {
        document.querySelector('#output').innerHTML = '';
        backlog.forEach((each) => {
            const yourNameEl = document.createElement('h1');
            yourNameEl.textContent = `Hello ${each.yourName}`;
            document.querySelector('#output').appendChild(yourNameEl);
            const nameEl = document.createElement('h2');
            nameEl.textContent = `Say Hello To ${each.name}`;
            document.querySelector('#output').appendChild(nameEl);
            const picEl = document.createElement('img');
            picEl.src = each.picture
            document.querySelector('#output').appendChild(picEl);
            const locationEl = document.createElement('h3');
            locationEl.textContent = `They Are From ${each.city}`;
            document.querySelector('#output').appendChild(locationEl);
            const messageEl = document.createElement('h3');
            const messageLinkEl = document.createElement('a');
            messageLinkEl.textContent = `Send Them A Message!`;
            messageLinkEl.setAttribute('href', `edit.html#${each.id}`);
            messageEl.appendChild(messageLinkEl);
            document.querySelector('#output').appendChild(messageEl);
            // Creates rating paragraph element and runs logic to see if we have attributed a rating to the suggestion.
            const messageTextEl = document.createElement('p')
            // If it does have a suggestion it will display it. otherwise nothing will happen.
            if (each.message) {
                messageTextEl.textContent = `YOU SENT A MESSAGE: ${each.message}`
                document.querySelector('#output').append(messageTextEl)
            }
            const buttonEl = document.createElement('button');
            buttonEl.textContent = 'Remove';
            buttonEl.addEventListener('click', () => {
                this.removeSuggestion(each.id)
                saveSuggestions(backlog)
                new RenderForm(backlog)
            })
            document.querySelector('#output').appendChild(buttonEl);
            const br = document.createElement('br');
            document.querySelector('#output').appendChild(br)
            const hr = document.createElement('hr');
            document.querySelector('#output').appendChild(hr)
        });
    }
    removeSuggestion = (id) => {
        const suggestionIndex = backlog.findIndex((suggestion) => suggestion.id === id)
        if (suggestionIndex > -1) {
            backlog.splice(suggestionIndex, 1)
        }
    }
}