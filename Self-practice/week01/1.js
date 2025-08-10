//b
let A = ["apple", "orange", 10, true]
console.log(A.length);
console.log(A[0]);
console.log(A[A.length-1]);
A.push (("lion"), [100, 1000]);
console.log(A);
for (let i = 0; i < A.length; i++) {
    console.log(A[i])
}
A.pop();
console.log(A.length)
let str = "key"
const strCh=[...str]
console.log(strCh)
let a1 = new Array()
console.log(a1)
let a2= new Array(10)
console.log(a2)
let a3= new Array(3,2,1,true)
console.log(a3)

const arr4=Array.of(10)
console.log(arr4)
const arr5=Array.from(arr4)
console.log(arr5)

const [,,a, ,...b] = [5, 10, 15, 20, 25]
console.log(a)

console.log(b)