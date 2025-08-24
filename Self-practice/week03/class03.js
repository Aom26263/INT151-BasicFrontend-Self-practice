// function getFreqOfWords(sentence) {
//   if (sentence === null || sentence === undefined)
//     return undefined
 
//   const words = sentence.toLowerCase().split(" ")
//   const frequen = {}
 
//   for (let word of words) {
//     if (frequen[word]) {
//       frequen[word] += 1
//     } else {
//       frequen[word] = 1
//     }
//   }
 
//   return frequen
// }

// 1. function de
function addNumbers(a, b) {
    return a + b;
}

const x = addNumbers
console.log(x(1, 2))
console.log(addNumbers(5,5));
console.log(typeof addNumbers);

//จัดการเลย
//044
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
    return x + y
}

function multi(x, y) {
    return x * y
}

console.log(calculate(4, 2, add)); 
console.log(calculate(4, 2, multi));


function Test(x) {
    return x
}

function Test2(x) {
    return x + 50
}

console.log(Test(Test2)(20))

// function sum(a,b) {
//     return a + b
// }
//  // arrow function
// const sum = (a,b) => a + b


function sumNumber() {
    let result = 0;
    for (const num of arguments) {
        result += num;
    }
    return result;
}

console.log(sumNumber(2,3,4,5,6,7))