//무조건 promise를 대체하는 것은 아님 각각 알맞게 사용

//1. async
//1) 그냥 return 하는 경우
// function fetchUser(){
//     //네트워크 통신을 해서 10초 걸리는 요청을 처리한다고 가정
//     return 'ellie'; //받아온 사용자 이름을 return
// }

//오래걸리는 코드를 비동기 처리를 하지 않으면 동기 처리를 하기 때문에 
//함수가 선언된 곳으로 가서 코드 블록을 실행하는 경우 10초 동안 머무르고 
//그제서야 다음 줄로 넘어가기 때문에 처리되는 동안 사용자는 빈 페이지만 보게됨

//2) promise 사용하는 경우
// function fetchUser() {
//     return new Promise((resolve, reject) =>{
//         // return 'ellie'; > Promise {<pending>} resolve도 rject도 호출하지 않았기 때문에 pending 상태를 출력함 
//         resolve('ellie');  //
//     });
// }

// const user = fetchUser();
// user.then(console.log); //user 가 들어오면 console 출력
// console.log(user);

//3) async 사용
//앞에 async 붙이면 똑같이 출력됨
async function fetchUser() {
        return 'ellie'; 
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
//async 가 붙은 함수 안에서만 쓸 수 있다

function delay(ms){  //delay 라는 함수는 promise를 return함
    return new Promise(resolve =>setTimeout(resolve, ms));  //정해진 ms가 지나면 resolve를 호출하는 promise를 return함
}

async function getApple() {
    await delay(1000);  //await을 쓰면 delay가 끝날 때가지(1초) 기다려줌
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function getBanana() { //이 함수 안에서 promise를 리턴할건데 
//     return delay(3000);
//     .then(()=> '🍌');  //이렇게 chaining하는 것보다 위에서 한 것 처럼 동기적으로 처리하는 것처럼 만드는게 좋다
// }

//모든 과일을 한번에 따오는 함수
// function pickFruits(){
//     return getApple()
//     .then(apple =>{
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     }); 
// }
// >>> but, 이런식으로 너무 중첩해서 사용하면 콜백 지옥됨

(async function pickFruits(){
    const apple = await getApple(); //각각 1초씩 걸림 (>아래 병렬처리에서 해결)
    const banana = await getBanana(); 
    return `${apple} + ${banana}`;
})

//최종적으로 호출
pickFruits().then(console.log)

//++에러처리도 할 수 있음
// async function pickFruits(){
//     try{
//         const apple = await getApple();
//         const banana = await getBanana();
//     }catch{
//         console.log('error');
//     }
//     return `${apple} + ${banana}`;
// }

//+await 병렬처리
//위와 같이 쓰면 각각 1초씩 걸림 (>아래 병렬처리에서 해결)
//const apple = await getApple(); 
//const banana = await getBanana(); 
async function pickFruits(){
    //Promise 만드는 순간 안에 있는 코드 블록이 바로 실행됨
    const applePromise = getApple();
    const bananaPromise = getBanana();
    //동기화 시켜주면 1초 만에 병렬 실행이 가능해짐
    const apple = await applePromise
    const banana = await bananaPromise
    return `${apple} + ${banana}`;
}

//3.promise api 
function pickAllFruits(){
    //all : promise배열을 전달하면 모든 promise들이 병렬적으로 다 받을 때까지 모아줌
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ') )
}
pickAllFruits().then(console.log)

function pickOnlyone(){
    //race: 배열에 전달된 promise 중에서 가장 먼저 값을 return 하는 것만 전달됨
    return Promise.race([getApple(), getBanana()])
}
pickOnlyone().then(console.log)