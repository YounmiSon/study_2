//1330
let a;
let b;

a = 3;
b = 5;

if (a > b) {
    console.log(">")
} else if (a < b) {
    console.log("<");
} else {
    console.log("==")
}

//9498
let s;
s = 80;

if (89 < s && s <= 100) {
    console.log("A");
} else if (79 < s && s < 90) {
    console.log("B");
} else if (69 < s && s < 80) {
    console.log("C");
} else if (59 < s && s < 70) {
    console.log("D");
} else if (s) {
    console.log("F");
}

//2753
let year = 2020;
if (0 < parseInt(year) && parseInt(year) <= 4000) {
    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 4 == 0) && (year % 400 == 0)) {
        console.log("1")
    } else {
        console.log("0")
    }
}


//14381
let x;
let y;

x = -1;
y = -3;

if ((x > 0 && y > 0)) {
    console.log("제 1사분면")
} else if ((x < 0 && y > 0)) {
    console.log("제 2사분면");
} else if (x < 0 && y < 0) {
    console.log("제 3사분면");
} else if ((x > 0 && y < 0)) {
    console.log("제 4사분면");
}

//2884
let h;
let m;

h = 10;
m = 30;
if ((0 <= h && h < 25) && (0 <= m && m < 60)) {
    if (m >= 45) {
        console.log(h + ":" + (m - 45))
    } else if (m < 45) {
        console.log(`${h - 1}:${Math.abs(m - 45)}`);
    }
}

//2525
//현재 시간 구하기
let now = new Date();
let hr = now.getHours();
let min = now.getMinutes();

//걸리는 시간, 분
let req;
req = 38;

// console.log(present)
//현재시간 - 걸리는 시간 출력
if (0 <= req && req <= 1000) {
    if (req < 60) {
        if (min + req < 60) {
            console.log(h + " " + (min + req))
        }
        else if (min + req >= 60) {
            //걸리는 시간 + 현재 분의 합이 60보다 크거나 같으면 소요시간은
            //현재 시간 + 절대값(정수만 뽑음(걸리는 시간 + 현재 분을 60으로 나눈 몫))
            //(걸리는 시간 + 현재 분)을 60으로 나눈 나머지 값만 출력
            console.log(hr + Math.abs(parseInt((min + req) / 60)) + ":" + ((min + req) % 60))
        }
    }
}

//2480
let q = Math.floor(Math.random() * 6) + 1;
let w = Math.floor(Math.random() * 6) + 1;
let e = Math.floor(Math.random() * 6) + 1;

console.log(q + " " + w + " " + e);
//3개가 모두 같을 때
if (q == w && q == e && w == e) {
    console.log(10000 + q * 1000)
    //2개가 같을 때
} else if ((q == w && q !== e)) {
    console.log(1000 + (q * 100));
} else if ((q == e && q !== w)) {
    console.log(1000 + (e * 100));
} else if ((w == e && q !== w)) {
    console.log(1000 + (w * 100));
}
//1개도 같지 않을 때 셋 중 가장 큰 수를 뽑아줌
else {
    console.log(q, w, e);
    console.log(Math.max(q, w, e) * 100)
}
