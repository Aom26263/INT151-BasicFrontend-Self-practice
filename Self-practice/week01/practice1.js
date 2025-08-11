//ChatGPT ช่วยสร้างโจทย์
// 1 เขียนโปรแกรมที่สร้าง array ชื่อ fruits ที่มีค่าเริ่มต้น ["mango", "banana", "grape"]
// แสดงผลจำนวนสมาชิกใน array (length)
// แสดงสมาชิกตัวแรก และตัวสุดท้ายของ array
let a = ["mango", "banana", "grape"]
console.log(a.length);
let b = a[0]
console.log(b)
console.log(a[a.length-1])

// 2 เขียนโปรแกรมที่สร้าง array ชื่อ items มีค่าตั้งต้นเป็น ["pen", 5, false]
// ใช้ push() เพื่อเพิ่ม "book" และ [100, 200] ลงไปใน array
// แสดงสมาชิกทั้งหมดด้วย for loop
// ใช้ pop() เพื่อลบสมาชิกตัวสุดท้ายออก
// แสดงจำนวนสมาชิกใน array อีกครั้ง

let items = ["pen", 5, false]
items.push("book", [100, 200]) //เพิ่มสมาชิกเข้าไป
for (let i = 0; i < items.length; i++) {
    console.log(items[i])
}
items.pop() //ลบสมาชิกตัวสุดท้ายออก
console.log(items.length)

// 3.1 เขียนโปรแกรมที่สร้าง array จากข้อความ "hello" ให้ได้ array ของตัวอักษร โดยใช้ spread operator
// 3.2 สร้าง array เปล่าชื่อ arr1 ด้วย new Array()
// 3.3 สร้าง array ที่มี 1 ช่อง (ความยาว 1) แต่ค่าภายในคือเลข 20 โดยใช้ Array.of()
// 3.4 สร้าง array ใหม่จาก array เดิมในข้อ 3 โดยใช้ Array.from()
// 3.5 ใช้ destructuring assignment เพื่อเก็บค่าลำดับที่ 3 จาก [100, 200, 300, 400, 500] ลงในตัวแปร third และเก็บค่าที่เหลือทั้งหมดหลังจากนั้นลงในตัวแปร rest
// แสดงผล third และ rest

// 3.1 
let str = "hello"
const letters = [...str]
console.log(letters)

//3.2
let arr1 = new Array()
console.log(arr1)

//3.3
const arr2 = Array.of(20)
console.log(arr2)

// 3.4 
const arr3 = Array.from(arr2)
console.log(arr3) 

// 3.5 
const [,, third, ...rest] = [100, 200, 300, 400, 500]
console.log(third) // 300
console.log(rest)  // [400, 500]