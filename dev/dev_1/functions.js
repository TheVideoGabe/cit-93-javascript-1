'use strict'
// Save input to local storage
const saveSuggestions = (backlog) => {
    localStorage.setItem("saved-suggestions", JSON.stringify(backlog));
};
// gets saved input from local storage
const getSavedSuggestions = () => {
    const suggestionsJSON = localStorage.getItem("saved-suggestions");
    return suggestionsJSON ? JSON.parse(suggestionsJSON): []
};
// color changing global variables
const colors = ['deepskyblue', 'plum', 'teal', 'blueviolet', 'cornflowerblue'];
let index = 0;

// Render local storage to the Output div.
const renderForm = (backlog) => {
    document.querySelector('#output').innerHTML = '';
    backlog.forEach((each) => {
        const nameEl = document.createElement('h2');
        nameEl.textContent = `Hello ${each.name}`;
        document.querySelector('#output').appendChild(nameEl);
        const consoleEl = document.createElement('h3');
        consoleEl.textContent = `You Are Playing On ${each.console}`;
        document.querySelector('#output').appendChild(consoleEl);
        const genreEl = document.createElement('h3');
        const suggestionLinkEL = document.createElement('a');
        suggestionLinkEL.textContent = `Here Are Some Suggestions For the ${each.genre} VideoGame Genre.`;
        suggestionLinkEL.setAttribute('href', `edit.html#${each.id}`);
        genreEl.appendChild(suggestionLinkEL);
        document.querySelector('#output').appendChild(genreEl);
        // Creates rating paragraph element and runs logic to see if we have attributed a rating to the suggestion.
        const ratingEl = document.createElement('p')
        // If it does have a suggestion it will display it. otherwise nothing will happen.
        if (each.helpfulness) {
            ratingEl.textContent = `This list was ${each.helpfulness}`
            document.querySelector('#output').append(ratingEl)
        }
        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'Remove';
        buttonEl.addEventListener('click', () => {
        output.style.backgroundColor = colors[index];
        output.style.color = 'white';
        index = index >= colors.length - 1 ? 0 : index + 1;
            removeSuggestion(each.id)
            saveSuggestions(backlog)
            renderForm(backlog)
        })
        document.querySelector('#output').appendChild(buttonEl);
        const br = document.createElement('br');
        document.querySelector('#output').appendChild(br)
        const hr = document.createElement('hr');
        document.querySelector('#output').appendChild(hr)
    });
};
// Removes a suggestion by targeting ID.
const removeSuggestion = (id) => {
  const suggestionIndex = backlog.findIndex((suggestion) => suggestion.id === id)

  if (suggestionIndex > -1) {
      backlog.splice(suggestionIndex, 1)
  }
}
//function that decides which games are displayed based on console choice and genre.
let list = (suggestions) => {
    //checks for playstation console and then goes by genres to output a list to the suggestion div on edit.html
    if (suggestions.console === 'Playstation' && suggestions.genre === 'RPG') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Dark Souls III\r\n9. Final Fantasy VII Remake\r\n8. Horizon Zero Dawn\r\n7. Mass Effect Legendary Edition\r\n6. Bloodborne\r\n5. DRAGON QUEST XI S: Echoes of an Elusive Age - Definitive Edition\r\n4. Undertale\r\n3. The Witcher 3: Wild Hunt\r\n2. Persona 5\r\n1. Persona 5 Royal`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Playstation' && suggestions.genre === 'Shooter') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Wolfenstein II: The New Colossus\r\n9. HUNTDOWN\r\n8. Battlefield 1\r\n7. The Outer Worlds\r\n6. Titanfall 2\r\n5. Doom\r\n4. Pistol Whip\r\n3. Quake\r\n2. Doom Eternal\r\n1. Grand Theft Auto V`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Playstation' && suggestions.genre === 'Party') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Sportsfriends\r\n9. The Jackbox Party Pack 5\r\n8. Tools Up!\r\n7. Pix the Cat\r\n6. Ultimate Chicken Horse\r\n5. Keep Talking And Nobody Explodes\r\n4. Patapon 2 Remastered\r\n3. Just Dance\r\n2. Towerfall Ascension\r\n1. Overcooked! 2`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Playstation' && suggestions.genre === 'Platformer') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Ratchet & Clank\r\n9. Rayman Legends\r\n8. Bloodstained: Ritual of the Night\r\n7. Crash Bandicoot 4: It's About Time\r\n6. Celeste\r\n5. Psychonauts 2\r\n4. Dead Cells\r\n3. INSIDE\r\n2. It Takes Two\r\n1. Shovel Knight: Treasure Trove`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Playstation' && suggestions.genre === 'Strategy') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Disgaea 5: Alliance of Vengeance\r\n9. Darkest Dungeon\r\n8. Child of Light\r\n7. SMITE\r\n6. Frostpunk: Console Edition\r\n5. Valkyria Chronicles 4\r\n4. Transistor\r\n3. Slay The Spire\r\n2. 13 Sentinels: Aegis Rim\r\n1. The Talos Principle`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    }
    //checks for Xbox console and then goes by genres to output a list to the suggestion div on edit.html
    if (suggestions.console === 'Xbox' && suggestions.genre === 'RPG') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Dark Souls III\r\n9. It Takes Two\r\n8. Divinity: Original Sin 2 - Definitive Edition\r\n7. DRAGON QUEST XI S: Echoes of an Elusive Age - Definitive Edition\r\n6. Yakuza: Like a Dragon\r\n5. Hades\r\n4. NieR: Automata - BECOME AS GODS Edition\r\n3. Fallout 4\r\n2. Mass Effect Legendary Edition\r\n1. The Witcher 3: Wild Hunt`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Xbox' && suggestions.genre === 'Shooter') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. The Outer Worlds\r\n9. Resident Evil village\r\n8. Call of Duty: Modern Warfare\r\n7. Titanfall 2\r\n6. Borderlands: The Handsome Collection\r\n5. BioShock: The Collection\r\n4. HUNTDOWN\r\n3. Doom Eternal\r\n2. HALO Infinite\r\n1. Grand Theft Auto V`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Xbox' && suggestions.genre === 'Party') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Nippon Marathon\r\n9. The Jackbox Party Pack 2\r\n8. Tools Up!\r\n7. Gang Beasts\r\n6. The Jackbox Party Pack 5\r\n5. Mantis Burn Racing\r\n4. The Jackbox Party Pack 6\r\n3. Rush: A Disney Pixar Adventure\r\n2. Overcooked! 2\r\n1. Just Dance`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Xbox' && suggestions.genre === 'Platformer') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Yoku's Island Express\r\n9. Crash Bandicoot 4: It's About Time\r\n8. Sonic Mania\r\n7. HUNTDOWN\r\n6. Little Nightmares II\r\n5. Ori And The Blind Forest\r\n4. It Takes Two\r\n3. Ori And The Will of The Wisps\r\n2. Ori and the Blind Forest: Definitive Edition\r\n1. INSIDE`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Xbox' && suggestions.genre === 'Strategy') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. SMITE\r\n9. Frostpunk: Console Edition\r\n8. Desperados III\r\n7. Fell Seal: Arbiter's Mark\r\n6. Battle Chasers: Nightwar\r\n5. Shadow Tactics: Blades of The Shogun\r\n4. Cities: Skylines - Xbox One Edition\r\n3. Jurassic World Evolution 2\r\n2. Nexomon: Extinction\r\n1. Pit People`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    }
    //checks for Nintendo Switch console and then goes by genres to output a list to the suggestion div on edit.html
    if (suggestions.console === 'Nintendo Switch' && suggestions.genre === 'RPG') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Final Fantasy XII: The Zodiac Age\r\n9. Pokemon Legends: Arceus\r\n8. Final Fantasy X/X-2 HD Remaster\r\n7. Shin Megami Tensei V\r\n6. Xenoblade Chronicles: Definitive Edition\r\n5. Diablo III: Eternal Collection\r\n4. Fire Emblem: Three Houses\r\n3. MONSTER HUNTER RISE\r\n2. DRAGON QUEST XI S: Echoes of an Elusive Age - Definitive Edition\r\n1. Hades`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Nintendo Switch' && suggestions.genre === 'Shooter') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Duke Nukem 3D: 20th Anniversary World Tour\r\n9. Azur Lane: Crosswave\r\n8. Wolfenstein II: The New Colossus\r\n7. The Outer Worlds\r\n6. Overwatch: Legendary Edition\r\n5. DOOM\r\n4. Bioschock: The Collection\r\n3. Metro Redux\r\n2. DOOM Eternal\r\n1. Borderlands Legendary Collection`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Nintendo Switch' && suggestions.genre === 'Party') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Very Very Valet\r\n9. Mario & Sonic at the Olympic Games Tokyo 2020\r\n8. Big Brain Academy: Brain vs. Brain\r\n7. Gang Beasts\r\n6. Overcooked: Special Edition\r\n5. Just Dance\r\n4. Super Mario Party\r\n3. WarioWare: Get It Together!\r\n2. Overcooked! 2\r\n1. Mario Party Superstars`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Nintendo Switch' && suggestions.genre === 'Platformer') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Dead Cells\r\n9. Kirby And The Forgotten Lands\r\n8. Little Nightmares II\r\n7. Super Mario 3D All-Stars\r\n6. Sonic Mania Plus\r\n5. Donkey Kong Country: Tropical Freeze\r\n4. Super Mario Maker 2\r\n3. Ori and the Will of the Wisps\r\n2. Super Mario 3D World + Bowser’s Fury\r\n1. Super Mario Odyssey`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'Nintendo Switch' && suggestions.genre === 'Strategy') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Story of Seasons: Friends of Mineral Town\r\n9. The Wild at Heart\r\n8. Disgaea 4 Complete+\r\n7. Two Point Hospital\r\n6. Mario + Rabbids Kingdom Battle\r\n5. Captain Toad: Treasure Tracker\r\n4. TRIANGLE STRATEGY\r\n3. Pikmin 3 Deluxe\r\n2. Shin Megami Tensei V\r\n1. Fire Emblem: Three Houses`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    }
    //checks for PC and then goes by genres to output a list to the suggestion div on edit.html
    if (suggestions.console === 'PC' && suggestions.genre === 'RPG') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Disco Elysium: The Final Cut\r\n9. Mass Effect 2\r\n8. Stardew Valley\r\n7. The Elder Scrolls V: Skyrim\r\n6. Slay The Spire\r\n5. Elden Ring\r\n4. Undertale\r\n3. Divinity: Original Sin II\r\n2. The Witcher 3: Wild Hunt\r\n1. Hades`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'PC' && suggestions.genre === 'Shooter') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Deep Rock Galactic\r\n9. Titanfall 2\r\n8. Bioshock\r\n7. DOOM Eternal\r\n6. Borderlands 2\r\n5. Half-Life 2\r\n4. Left 4 Dead 2\r\n3. DUSK\r\n2. Bioshock Infinite\r\n1. Half-Life: Alyx`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'PC' && suggestions.genre === 'Party') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. The Jackbox Party Pack 6\r\n9. Overcooked! 2\r\n8. The Jackbox Party Pack 7\r\n7. The Jackbox Party Pack 2\r\n6. INVERSUS\r\n5. Sam & Max: Beyond Time and Space\r\n4. Among Us\r\n3. Keep Talking and Nobody Explodes\r\n2. SpeedRunners\r\n1. TowerFall Ascension`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'PC' && suggestions.genre === 'Platformer') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. Cuphead\r\n9. A Short Hike\r\n8. Hollow Knight\r\n7. Gunpoint\r\n6. Ori And The Blind Forest\r\n5. Dead Cells\r\n4. Spelunky 2\r\n3. Ori and the Will of the Wisps\r\n2. Celeste\r\n1. Portal 2`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    } else if (suggestions.console === 'PC' && suggestions.genre === 'Strategy') {
        const top10GameEl = document.createElement('h1')
        top10GameEl.textContent = `My Top 10 ${suggestions.genre} Games on ${suggestions.console}`
        document.querySelector('#outputSuggestions').appendChild(top10GameEl);
        const gameList = document.createElement('h3')
        gameList.textContent = `10. The Talos Principle\r\n9. Crusader Kings III\r\n8. XCOM: Enemy Unknown\r\n7. Inscryption\r\n6. RimWorld\r\n5. Slay the Spire\r\n4. Desperados III\r\n3. Sid Meier's Civilization V\r\n2. SMITE\r\n1. League Of Legends`
        document.querySelector('#outputSuggestions').appendChild(gameList)
    }
}

// 1st JAVASCRIPT CODE EXAMPLE OUT OF OUR COURSE. Web Workers API (Javascript that runs in the background without affecting performance.)
// Creates a worker which calls another js. file to run whnever the worker is called on our html file.
let w;

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("worker.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}
function stopWorker() { 
  w.terminate();
  w = undefined;
}
// 2nd JAVASCRIPT CODE EXAMPLE OUT OF OUR COURSE. (WEB Geolocation API)
// The Geolocation API is used to get the geographical position of a user. But only with their approval.
const x = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}