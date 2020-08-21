// var userAge = 18;          // input age
// var is_Subscribed = true; // "true" is subscribed "false" is NOT

var userAge = [16, 17, 18, 19];
var is_Subscribed = [false, true, true, false];

console.log(userAge);
console.log(is_Subscribed);

for (index = 0; index < userAge.length; index++) {

        if((userAge[index] >= 18 && is_Subscribed[index] == true)) {
            console.log("User is old enough and subscribed");
        } else if ((userAge[index] < 18 && is_Subscribed[index] == true)) {
            console.log("User is subscribed but NOT 18");
        } else if ((userAge[index] >= 18 && is_Subscribed[index] == false)) {
            console.log("User 18+ but NOT subscribed");
        } else if ((userAge[index] < 18 && is_Subscribed[index] == false)) {
            console.log("User does NOT meet BOTH requirements");
        } else {
            console.log("ERROR");
    }

}
// ------------------------------------

