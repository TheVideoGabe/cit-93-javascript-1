// dev 0 project using andrews lessons

// Show on page function
const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};
// Global variables.
const doggy = {
  name: "Dexter",
  age: 13 + " weeks",
  cues: [],
  isHungry: false,
  addCue: function (cues, hours) {
    this.cues.push({
      cues: cues,
      hours: hours,
    });
  },
};
// Function that calls for global variables. and has local scope variable.with some boolean logic.
const training = function (days) {
  let cueTraining = days + " days";
  if (doggy.isHungry) {
    return `Gotta feed my doggo before training again.`;
  } else {
    return `${doggy.name} is ${doggy.age} and has been training for ${cueTraining}. Some things we have practiced are:`;
  }
};
// routine function that generates a random day of the week. using a local array.
const routine = function () {
  const day = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const randomDay = day[Math.floor(Math.random() * day.length)];
  return `Today is ${randomDay} and we worked on ${doggy.cues.length} things today.`;
};
// a function that that uses the output of our routine function to return the value.
const practice = function () {
  let again = routine();
  return `${again} Dexter is getting better at his cues everyday.`;
};
// Adds cues and hours to our cues arrays.
doggy.addCue("Sit", 2);
doggy.addCue("lay Down", 1);
doggy.addCue("roll over", 4);
doggy.addCue("up", 1);
doggy.addCue("down", 1);
doggy.addCue("speak", 1);
doggy.addCue("quiet", 1);
// declares broader scopes for our functions
let train = training(2);
let eachDay = routine();
// outputting the training function and inserting 24 as the days.
showOnPage(train);
// looping trough the array we inserted with our addCue method. And outputting the list.
doggy.cues.forEach(function (list) {
  showOnPage(
    "Cue--> " + list.cues + "----- Practiced for: " + list.hours + " hour/s."
  );
});
// outputting our routine that gives us a random day of the week using an array and also outputs how many cues we are currently practicing. (in this case three because that is the length)
showOnPage(eachDay);
// outputting our return value from another function into this function.
showOnPage(practice());
// tried adding all the hours from the Cue array but couldn't figure it out.
