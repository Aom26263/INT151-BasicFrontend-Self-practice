import getLength, { echo, Book } from "../week05/utilties.js"
// const { echo, getLength, GPA, Book } = require("./libs/utilities.js")
console.log(echo("Today is a present"))
console.log(getLength("JS Beginner"))
console.log(echo("JavaScript is fun"))
console.log(getLength("JavaScript is fun"))
// console.log(GPA)
const b1 = new Book("MSH", "Math so hard", 9999)
console.log(b1.getsummary())
const b2 = new Book("EFF", "English for fun", 100)
console.log(b2.getsummary())
//1. tranform individual export to export list and add exporting book class
// 1. transform individual export to export list and add exporting Book class

// const { echo, getLength, GPA, Book } = require("./libs/utilities.js")

 