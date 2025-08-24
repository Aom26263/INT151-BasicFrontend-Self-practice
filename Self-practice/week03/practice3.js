//ChatGPT ช่วยสร้างโจทย์ + อธิบายบางคำสั่งเกี่ยวกับ array
// 1: Word Transformation เขียนฟังก์ชันชื่อ transformSentence(sentence, transformer) ที่รับ sentence (string)
// transformer (function) ที่ใช้แปลงคำแต่ละคำ ฟังก์ชันจะคืนค่า string ใหม่ที่ทุกคำถูกแปลงโดย transformer

function Transformation(sentence, transformer) {
    if (!sentence) {
        return ""
    }

    const words = sentence.split("") //ทำให้ string เป็น array
    const t = words.map(word => transformer(word)) //เพื่อเอามา map เข้าฟังชัน transformer เเต่ละคำได้
    return t.join("")  // รวม array กลับเป็น string
}

function toUpper(word) {
  return word.toUpperCase();
}

function addExclamation(word) {
  return word + "!";
}

//test
console.log(Transformation("hello world", toUpper)); 
console.log(Transformation("i love js", addExclamation)); 
console.log(Transformation("10Aom", toUpper)); 


// 2: Custom Calculator เขียนฟังก์ชัน customCalc(numbers, operation) ที่รับ numbers (array ของตัวเลข)
// operation (function ที่ใช้ในการคำนวณ เช่น บวก, คูณ, หาค่าเฉลี่ย)
// ให้ฟังก์ชันคำนวณโดยใช้ operation ที่ส่งเข้ามา แล้ว return ค่าที่ได้

function customcalculator(numbers, operation) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return undefined;
    }
    return operation(numbers);
}

function plus(arr) {
    return arr.reduce((a,b) => a + b, 0); // reduce ใช้รวมค่าใน array โดยเริ่มตั้งเเต่เลขหลัง , จนครบทุกตัวใน array เเละได้ออกมาเป็น1ค่า
}

function multi(arr) {
    return arr.reduce((a,b) => a * b, 0);
}

function avg(arr) {
    return arr.reduce((a,b) => (a + b) / 2, 0);
}

console.log(customcalculator([1, 2, 3, 4], plus));      
// 10

console.log(customcalculator([2, 3, 4], multi));     
// 24

console.log(customcalculator([5, 10, 15], avg));   
// 10