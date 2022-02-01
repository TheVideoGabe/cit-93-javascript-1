const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

let restaurant = {
    name: 'Grill House',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    } 
    ,seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    }
    ,removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
// seatparty
//removeparty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
(showOnPage(restaurant.checkAvailability(4)))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
(showOnPage(restaurant.checkAvailability(4)))

// andrews solution

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }, 
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
(showOnPage(restaurant.checkAvailability(4)))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
(showOnPage(restaurant.checkAvailability(4)))