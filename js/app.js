var userAge = 18;          // input age
var is_Subscribed = true; // "true" is subscribed "false" is NOT

console.log(userAge);
console.log(is_Subscribed);
// ------------------------------------


if(userAge >= 18 && is_Subscribed == true) {
    console.log("User is old enough and subscribed");
} else if (userAge < 18 && is_Subscribed == true) {
    console.log("User is subscribed but NOT 18");
} else if (userAge >= 18 && is_Subscribed == false) {
    console.log("User 18+ but NOT subscribed");
} else if (userAge < 18 && is_Subscribed == false) {
    console.log("User does NOT meet BOTH requirements");
} else {
    console.log("ERROR");
}

// else if (userAge < 18) {
//     console.log("User does not meet the age requirement");
// }



// // Subscription check
// if(is_Subscribed == true) {
//     console.log("User is subscribed");
// } else {
//     console.log("User is NOT subscribed!");
// }

// // AGE and Subs check
// if (userAge >= 18 && is_Subscribed != true) {
//     console.log("User is 18+ but NOT subscribed!");
// } else if (userAge >= 18 && is_Subscribed == true) {
//     console.log("User is 18+ and SUBSCRIBED")
// } else if (userAge < 18 && is_Subscribed == true) {
//     console.log("User is subscribed but NOT old enough!");
// }