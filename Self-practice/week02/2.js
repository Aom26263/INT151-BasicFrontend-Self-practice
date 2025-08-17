// function calculateTotalPages(items, itemsPerpage) {
//     if (items < 0) {
//         throw Error('Number of items cannot be negative')
//     }
//     if (itemsPerpage <= 0) {
//         throw Error ('Items per page must be greather than zero')
//     }
//     return Math.ceil(items / itemsPerpage);
// }

// console.log(calculateTotalPages(10,3))
// console.log(calculateTotalPages(10,0))

//create object with literals
const book={isbn:1234, isbn:7890}
console.log(book)
const bank = {
    customer: "Somchai",
    age: 20, 
    address: {
        city: "",
        country: ""
    },
    money: undefined
}
console.log(bank)

//litera
// function Car(brand, type, price){
//     this.brand = brand
//     this.type = type
//     this.price = price
// }

// let myCar = new Car("Honda", "sport", 500000);
// console.log(myCar);

//class
//จัดการเลย
//044
// class Car {
//     constructor(brand, type, price) {
//         this.brand = brand
//         this.type = type
//         this.price = price
//     }
// }

// let Honda = new Car("Honda", "sport", 500000)
// console.log(Honda)

//using Object.create(existing object)
//จัดการเลย
//044
// let carPrototype = {
//     showInfo() {
//         console.log(`Brand: ${this.brand}, Type: ${this.type}`);
//     }
// }

// let myCar = Object.create(carPrototype);
// myCar.brand = "Toyota";
// myCar.type = "SUV";

// myCar.showInfo();

// //1. object literal 
// const per1 = {firstName: "Sorrawich", lastName: "Prasopsub", age: 19}
// console.log(per1.firstName)
// console.log(["per1.lastName"])
// //for ...in (object)
// for (const key in per1) {
//   console.log(key)
//   console.log(per1[key])
// }

function dosomething() {
    obj = { id:1, name: "yoyo"}
    Obj.name = "Aom"
}
const pet = {id: 1, name: "yoyo"}
console.log(pet.name)
dosomething(pet)
console.log(pet.name)


// const std = {id: 1, name: "Somchai"}
// const std1 = {id: 1, name: "sOmchai"}
// function compareStudent(std1, std) {
//     const sameid = std.id === std1.id
//     const samename = std.name.toLowerCase() === std1.name.toLowerCase()
//     if (sameid && samename === sameid && samename) {
//         return true
//     }
//     return false
// }

const std1 = {id:1, name:"Somchai", address: {no:111, city:"Bangkok"}}
let {name : fullName,id} = std1
console.log(fullName)
console.log(id)
let { address: { city: myAddress } } = std1;
console.log(myAddress)