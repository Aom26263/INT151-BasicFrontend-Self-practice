//ChatGPT ช่วยสร้างโจทย์
// 1. Students & Scores มี array
// const students = [
//   { id: "s01", name: "Anan", scores: [10, 20, 30] },
//   { id: "s02", name: "Boon", scores: [15, 25, 35] },
//   { id: "s03", name: "Chai", scores: [20, 30, 40] }
// ];
// ให้หาคะแนน เฉลี่ย ของแต่ละคน 
// output ["Anan: 20", "Boon: 25", "Chai: 30"]

const students = [
  { id: "s01", name: "Anan", scores: [10, 20, 30] },
  { id: "s02", name: "Boon", scores: [15, 25, 35] },
  { id: "s03", name: "Chai", scores: [20, 30, 40] }
];

const medium = []
students.forEach(student => {  //forEach เอา element ใน array มาวางไว้ในตัวแปรใหม่ (student) ทีละรอบ
    // student ตัวแปรใหม่นี้มันเลยดึงค่ามาใช้ต่อได้คือ .scores ถาม chatgpt มา
    const total = student.scores.reduce((sum, score) => sum + score, 0)
    const avg = total / student.scores.length
    medium.push(`${student.name}, ${avg}`)
    return medium
})

console.log(medium)

// 2. Temperature Data
// const temps = [32, 28, 25, 30, 27, 26];
// เขียน function หา ค่าเฉลี่ย, ค่าสูงสุด, ค่าต่ำสุด

const temps = [32, 28, 25, 30, 27, 26];
function max(arr) {
    return Math.max(...arr)
}

function min(arr) {
    return Math.min(...arr)
}

function avg(arr) {
    const total = arr.reduce((sum, num) => sum + num, 0)
    const avg = total / arr.length
    return avg
}

console.log(`Avg = ${avg(temps)}`);
console.log(`Max = ${max(temps)}`);
console.log(`Min = ${min(temps)}`);

// 4. Movie Ratings
// const movies = [
//   { name: "Avatar", rating: 8.0 },
//   { name: "Titanic", rating: 7.8 },
//   { name: "Joker", rating: 8.5 },
//   { name: "Frozen", rating: 7.0 }
// ];
// หาหนังที่มี rating >= 8
// เก็บชื่อหนังใน array ใหม่ เช่น ["Avatar", "Joker"]

const movies = [
  { name: "Avatar", rating: 8.0 },
  { name: "Titanic", rating: 7.8 },
  { name: "Joker", rating: 8.5 },
  { name: "Frozen", rating: 7.0 }
];

const new_movie = movies.filter(movie => movie.rating >= 8).map(movie => movie.name);
console.log(new_movie)
