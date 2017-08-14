var momentInTime = require('moment');
var chalk = require('chalk');
let currentMomentInTime = momentInTime([2017, 8, 14]).isDST()




console.log("It is " + (chalk.blue(momentInTime().format('dddd LL, LTS'))) + ".")
console.log("It is the " + (chalk.magenta(momentInTime().dayOfYear() + "th")) + " day of the year.")

let minutes = momentInTime().minutes();
let hours = momentInTime().hours();
let seconds = momentInTime().seconds();

console.log("It is " + (chalk.cyan((hours*60*60) + (minutes*60) + (seconds))) + " seconds into the day.");

if (currentMomentInTime === true){
    console.log("It " + (chalk.green("is")) + " during Daylight Savings time.")
}
    else {(console.log("It is not during Daylight Savings time."))         
}

let year = momentInTime().year();
let leapYear = momentInTime([year]).isLeapYear();

if (leapYear === false){
    console.log("It " + (chalk.red("is not") + " a leap year"))}