var momentInTime = require('moment');
var chalk = require('chalk');
let currentMomentInTime = momentInTime([2017, 11, 14]).isDST()




console.log("It is " + (chalk.blue(momentInTime().format('dddd LL, LTS'))) + ".")
console.log("It is the " + (chalk.magenta(momentInTime().dayOfYear() + "th")) + " day of the year.")

let minutes = momentInTime().minutes();
let hours = momentInTime().hours();
let seconds = momentInTime().seconds();

console.log("It is " + ((hours*60*60) + (minutes*60) + (seconds)) + " seconds into the day.");

if (currentMomentInTime = true){ // i need to check this because my currentMoment variable is always coming back as true regardless of the time of year
    console.log("It is during Daylight Savings time.")
}
    else {(console.log("It is not during Daylight Savings time."))         
}


console.log("")
console.log(currentMomentInTime)






// const moment = require('node-moment');

// var nextyear  = moment().add(moment.duration("P1Y"));
// console.log("Next year will be", nextyear);


// //load languages (if required)
// var moment_fr = require('node-moment/lang/fr');
// moment_fr(moment);

// var nextyear  = moment().add(moment.duration("P1Y"));
// console.log("Next year will be", nextyear);




// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('How often do you fart? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log("I have farted " + `${answer.length}` + " times today");

//   rl.close();
// });