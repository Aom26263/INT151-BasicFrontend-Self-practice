// const words = ["apple", "Mango", "Orange", "Banana"]
// words.reverse()
// console.log(words)
// 1. annonymous arrow function
//044
//จัดการเลย
// const startAWords = []
// words.forEach((word) => {
//     if (word.startsWith("a")) {
//         startAWords.push(word);
//     }
//     })
// console.log(startAWords)

// const startAWords = words.filter((word) => word.startsWith("a"))
// console.log(startAWords)

// 2. annonymous function daclaration
// const startAWords1 = words.filter(function (word) {
//     return word.startsWith("a")
// })
// console.log(startAWords1)
// 3. name arrow function
// const checkStartA = (word) => word.startsWith("a")
// const startAWords2 = words.filter(checkStartA)
// console.log(startAWords2) 
// 4. name function declaration
// const checkStartA2 = function(word) {
//     return word.startsWith("a")
// }
// const startAWords3 = words.filter(checkStartA2)
// console.log(startAWords3)

const employees = [
    { 
        id: "e01",
        firstname: "Somchai",
        lastname: "Jaidee"
    } ,

    { 
        id: "e02",
        firstname: "Pornchai",
        lastname: "Deejai"
    } ,

    { 
        id: "e03",
        firstname: "Suda",
        lastname: "Rakdee"
    }
]
// output ['SOMCHAI JAIDEE', 'PORNCHAI DEEJAI', 'SUDA RAKDEE']
// output ['SOMCHAI JAIDEE', 'PORNCHAI DEEJAI']

// const fullnames = []
// employees.forEach(employee => { const fullname = `${employee.firstname} ${employee.lastname}`.toUpperCase();
// fullnames.push(fullname)});

//044
//จัดการเลย
const fullnames = []
employees.slice(0, 2).forEach(employee => {
    const fullname = `${employee.firstname} ${employee.lastname}` .toUpperCase();
    fullnames.push(fullname)
})

console.log(fullnames);


//044
//จัดการเลย
const carts = [{productId: 1002, price: 10, amount: 5}, 
    {productId: 2005, price: 100, amount: 2},
    {productId: 5001, price: 5, amount: 4} ,
]
// net price = total price * VAT 7%

const totalPrice = carts.reduce((sum, item) => {
    return sum + item.price * item.amount;
}, 0);

const VAT = 0.07
const netPrice = totalPrice * (1 + VAT)
console.log(netPrice)


const nums = [2,4,6]
nums.push(8)
console.log(nums)
nums.unshift(10)
console.log(nums)
nums.pop() // remove ท้าย array
console.log(nums)
nums.shift() // remove ต้น array

const words = ["apple", "orange", "banana"]
words.splice(2, 0, "Bomb", "cherry")
console.log(words)

//delete bomb
words.splice(2, 1)
console.log(words)
//replace cherry with mango
words.splice(2, 1, "mango")
console.log(words)