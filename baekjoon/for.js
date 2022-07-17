//2739
const n = Math.floor(Math.random() * 8) + 2;
// 0 < n && n < 10
for (let i = 1; i < 10; i++) {
    console.log(n + " * " + i + " = " + (n * i))
}

//10950
for (let k = 0; k < 5; k++) {
    let a = Math.floor(Math.random() * 9) + 1
    let b = Math.floor(Math.random() * 9) + 1
    console.log(a + " " + b);
    console.log(a + b);
}

//8393 ★
let num = 10
let res = 0
for (let l = 1; l <= num; l++) {
    res += l
}
console.log(res)

//2741
let m = 5
for (let p = 1; p <= m; p++) {
    console.log(p)
}

//2742
let rm = 5
for (let p = rm; p > 0; p--) {
    console.log(p)
}

//11021
for (let r = 1; r < 5; r++) {
    let q = Math.floor(Math.random() * 9) + 1
    let w = Math.floor(Math.random() * 9) + 1
    let result = q + w
    console.log("Case #" + r + ": " + result)
}

//11022
for (let e = 1; e < 5; e++) {
    let q = Math.floor(Math.random() * 9) + 1
    let w = Math.floor(Math.random() * 9) + 1
    let rst = q + w
    console.log("Case #" + e + ": " + q + " + " + w + " = " + rst)
}

// //2438 ★
// for (let u = 0; u < 5; u++) {
//     for (let y = 0; y <= u; y++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// //2439
// for (let z = 0; z < 5; z++) {
//     for (let x = 4; x > z; x--) {
//         document.write('&nbsp')
//     }
//     for (let x = 0; x <= z; x++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

//별찍기 repeat 사용
for (let star = 1; star <= 5; star += 1) {
    console.log('*'.repeat(star));
}

for (let star = 5; star >= 1; star -= 1) {
    console.log('*'.repeat(star))
}

for (let star = 5; star >= 1; star -= 1) {
    console.log(' '.repeat(5 - star) + '*'.repeat(star))
}

for (let star = 0; star < 5; star += 1) {
    console.log('*'.repeat(star + 1))
}

//10871
let A = [1, 10, 4, 9, 2, 3, 8, 5, 7, 6]
let N = 10;
let X = 5;

for (let b = 0; b < A.length; b++) {

}
