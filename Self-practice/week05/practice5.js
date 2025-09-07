//ChatGPT ช่วยสร้างโจทย์
//1 ให้เขียนโค้ดใน test.js ดังนี้
// import getLength แบบ default
// import echo และ Book แบบ named export
// แสดงผลลัพธ์ดังนี้
// ข้อความ: "JavaScript is fun"
// ความยาว: 16
// Book id: 9999
//คำตอบอยู่ใน test.js

// 2 ให้แก้ไข class Book ใน utilities.js โดยเพิ่มคุณสมบัติดังนี้
// title (ชื่อหนังสือ)
// author (ผู้แต่ง)
// เพิ่ม method getSummary() ที่ return string เช่น
// "Book: <title>, Author: <author>, ID: <id>"
// จากนั้นใน test.js ให้สร้าง object Book ขึ้นมา 2 เล่ม แล้วใช้ getSummary() แสดงรายละเอียดหนังสือแต่ละเล่ม
//คำตอบอยู่ใน test.js utilities.js

//โจทใน silde
//  Write a function addProperty(obj, key, value) that adds a new 
// property to an object and returns the updated object.
//  Output
//  • console.log(addProperty({ name: 'John' }, 'age', 25)) 
// { name: 'John', age: 25 }
//  • console.log(addProperty({}, 'city', 'New York’))
function addProperty(obj, key, value) {
    obj[key] = value
    return obj;
}

console.log(addProperty({ name: 'John' }, 'age', 25)) 
console.log(addProperty({}, 'city', 'New York'))

// Write a function getFreqOfWords(sentence) that returns an object with keys representing 
// unique words in lowercase and values representing the frequency of occurrences of each 
// word with ignore case in the sentence. If the input string is null or undefined, return 
// undefined
// Output
//  • console.log(getFreqOfWords('Today is present and present is your gift'))
//  //{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
//  • console.log(getFreqOfWords('Do you best just do it’))
//  //{ do: 2, you: 1, best: 1, just: 1, it: 1 }
//  • console.log(getFreqOfWords(null)) //undefined
//  • console.log(getFreqOfWords(undefined)) //undefined

function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) {
        return undefined;
    }
    
    const words = sentence.toLowerCase().split(" ");
    const freq = {};

      for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))