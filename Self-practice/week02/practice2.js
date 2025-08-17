//ChatGPT ช่วยสร้างโจทย์
//1
// สร้างคลาส Car รับ brand, model, year, price
// มีเมธอด showInfo() → return string เช่น "Brand: Honda, Model: Civic, Year: 2020, Price: 500000"
// สร้างคลาส Garage เก็บรถทั้งหมดใน array ชื่อ cars
// มีเมธอด addCar(car) → เพิ่มรถเข้าการ์เรจ
// removeCar(brand, model) → ลบรถตาม brand + model
// listCars() → คืนค่า array ของชื่อรถทั้งหมดในรูปแบบ "Brand Model"
// สร้างฟังก์ชัน findCarsByYear(garage, year) คืนค่า array ของรถที่ปีตรงกับที่กำหนด
// ใช้ Destructuring เวลาแสดงข้อมูลรถ ใช้ destructuring เอา brand กับ model แล้ว console.log แค่สองอย่าง
// เพิ่ม Error Handling ถ้า year < 2000 หรือ price <= 0 → throw error

class Car {
    constructor(brand, model, year, price) {
        if (year < 2000) {
            throw new error("Year must be 2000 or higher");
        }
        if (price <= 0) {
            throw new error("Price must be 0 or higher");
        }
        this.brand = brand
        this.model = model
        this.year = year
        this.price = price
    }

    showInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}`
    }
}

class Garage {
    constructor() {
        this.cars = []
    }

    addCar(car) {
        this.cars.push(car)
    }

    removeCar(brand, model) {
        this.cars = this.cars.filter(c => !(c.brand === brand && c.model === model))
    }

    listCars() {
        return this.cars.map(c => `${c.brand} ${c.model}`)
    }
}

function findCarsByYear(garage, year) {
    return garage.cars
    .filter(c => c.year === year)
    .map(c => `${c.brand} ${c.model}`);
}

// chat gpt เจนมา
// ทดสอบการทำงาน
// ----------------------
try {
    const car1 = new Car("Honda", "Civic", 2020, 500000);
    const car2 = new Car("Toyota", "Corolla", 2018, 400000);
    // const car3 = new Car("Ford", "Fiesta", 1998, 150000); // ❌ error

    const garage = new Garage();
    garage.addCar(car1);
    garage.addCar(car2);

    console.log("📌 รายชื่อรถทั้งหมด:", garage.listCars());
    // => ["Honda Civic", "Toyota Corolla"]

    console.log("📌 รถปี 2020:", findCarsByYear(garage, 2020));
    // => ["Honda Civic"]

    // ใช้ Destructuring
    const { brand, model } = car2;
    console.log(`📌 Destructuring: ${brand} ${model}`); // "Toyota Corolla"

    // แสดงข้อมูลรถเต็ม
    console.log("\n=== ข้อมูลรถเต็ม ===");
    garage.cars.forEach(c => console.log(c.showInfo()));

    // ลบรถ Honda Civic
    garage.removeCar("Honda", "Civic");
    console.log("\n📌 หลังลบ Honda Civic:", garage.listCars());
    // => ["Toyota Corolla"]

} catch (err) {
    console.error("Error:", err.message);
}

// ---------------------------------------------------------------------------------
//2
//ถามchatให้ช่วยอธิบายโค้ดบางส่วน
function shallowEquality(object1, object2) {
    const keys1=Object.keys(object1) // ดึงชื่อ property ทั้งหมดของ object1
    const keys2=Object.keys(object2) // ดึงชื่อ property ทั้งหมดของ object2

    if(keys1.length != keys2.length) {
        return false
    }
    for(let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true
}

let book1 = {
    isbn: 123456789,
    title: "JavaScript"
}

let book2 = {
    isbn: 123456789,
    title: "JavaScript"
}

console.log(shallowEquality(book1, book2));