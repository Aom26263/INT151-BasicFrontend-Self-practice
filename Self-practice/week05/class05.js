//จัดการเลย
//044
// const array14 = [1, 30 ,4, 21, 100000]
// array14.sort((a,b) => b-a)
// console.log(array14)
// const students = [
//     {id: 67500102, name: "Suda", gpa: 2.5},
//     {id: 67500555, name: "ada", gpa: 2.8},
//     {id: 67500589, name: "pornchai", gpa: 2.5},
//     {id: 67500104, name: "Pornsak", gpa: 2.5},
// ]

// students.sort((a,b) => {
//     if (a.name.toLowerCase() < b.   name.toLowerCase()) return -1;
//     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//   return 0;
// })

// console.log(students)

//utilities.js
function echo(msg) {
  return msg
}
function getLength(str) {
  return str.length
}
const GPAAverage = 3.0
class Book {
  constructor(isbn) {
    this.isbn = isbn
  }
}
module.exports = { echo, getLength, GPA: GPAAverage, Book }
//object syntax //{echo:echo, getLength:getLength, GPA: GPAAverage}
 
//test.js
const { echo, getLength, GPA, Book } = require("./libs/utilities.js")
console.log(echo("Today is a present"))
console.log(getLength("JS Beginner"))
console.log(GPA)
const b1 = new Book(1234)
console.log(b1)


 