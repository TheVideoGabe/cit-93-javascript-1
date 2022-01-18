// let temp =55

// // if (temp >= 60) {
// //     if (temp <= 90) {

// //     }
// // }

// // logical and operator- true if both sides are true, false otherwise
// // logical or operator - true is at least one side is true, false otherwise.

// if (temp >= 60 && temp <=90) {
//     console.log('Its pretty nice out')
// } else if (temp <= 0 || temp >= 120) {
//     console.log('do not go outside')
// } else {
//     console.log('do whatever you want')
// }

// challenge

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
     console.log('Offer Only vegan dishes')
  } else if (isGuestOneVegan || isGuestTwoVegan) {
      console.log('Offer Some Vegan dishes')
  } else {
      console.log('Offer anything on the menu')
     }