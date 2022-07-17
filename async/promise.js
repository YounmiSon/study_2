//promise는 class 이므로 new 라는 키워드를 통해 obj을 생성할 수 있다
//promise의 생성자를 보면 executor라는 콜백함수를 전달해줘야 하는데  
//executor라는 콜백함수 안에는 또 다른 두 개의 콜백함수를 받는다 
//1. resolve 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달함 
//2. reject 기능을 수행하다가 문제가 생기면 호출함

//1.producer
const promise = new Promise((resolve, reject) => {
    //대부분 heavy한 작업을 수행하는데 이런 경우 동기적으로 처리하면 
    //파일을 읽어오고, 네트워크에서 데이터를 받아오는 동안 
    //다음 라인의 코드가 실행되지 않을 수 있기 때문에 heavy하면 비동기로 처리하는 것이 좋다
    console.log('doing something...');
    setTimeout(() => {
        //성공적으로 기능을 수행했을 때 resolve라는 콜백 함수를 통해서 전달하면 됨
        // resolve('ellie')
        reject(new Error('no network'))
    }, 2000)
    //promise를 만드는 순간 우리가 전달한 executor라는 콜백함수(resolve, reject)가 바로 실행된 것을 알 수 있다
    //만약 네트워크 요청을 사용자가 요구한 경우에만 해야하는 경우라면 위와 같이 작성하면 불필요한 네트워크 통시이 일어날 수 있다
})

//★새로운 promise가 만들어질때는 우리가 전달한 executor라는 함수가 실행된다!! 는 걸 항상 유의해서 작성할 것

//2.consumer : then, catch, finally
//then promise가 정상적으로 수행이 되어서 resolve라는 콜백함수로 전달된 값이 파라미터로 들어옴
promise
    .then(value => {
        console.log(value);
    })
    //근데 resolve('ellie') 대신 reject(new Error('no network'))를 사용하면 
    //then을 이용해서 성공적인 case를 다뤘기 때문에 uncaught에러 발생(Uncaught (in promise) Error: no network)
    //error처리 하려면 catch를 이용해 error 발생시 어떻게 처리할지를 담은 콜백 함수를 전달하면됨
    //promise의 then을 호출하면 똑같은 promise를 리턴하기 때문에 그 리턴된 promise의 catch를 다시 호출할 수 있는 것이다
    //이것을 chaining이라고 한다
    .catch(error => {
        console.log(error);
    })

    //then, catch로 성공값, 실패값을 받아와서 처리하면 됨
    //finally는 성공, 실패와 상관없이 무조건 수행되므로, 어떤 기능을 마지막으로 수행하고 싶을 때 사용 가능
    .finally(() => {
        console.log('finally');
    })

//3.promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    //1초 있다가 숫자 1을 전달함
    setTimeout(() => resolve(1), 1000);
});

fetchNumber //라는 promise가
//then이니까 성공적으로 되면
    .then(num => num * 2) //2를 곱하고 = 2
    .then(num => num * 3) //3을 곱하고 = 6
    .then(num => { //6이 전달됨
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1) //숫자에 -1을 뺀 값을 또 전달 = 5
            }, 1000);
        })
    })
    .then(num => console.log(num));

    //then은 값을 바로 전달해도 되고 또 다른 promise를 전달해도 된다

    //4. error handling
    const getHen = () =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve('🐓'), 1000);
    })
    const getEgg = hen =>
    new Promise((resolve, reject) =>{
        // setTimeout(() => resolve(`${hen} => 🍥`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🍥`)), 1000);
    })

    const cook = egg =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    })

    getHen()
    //.then(hen => getEgg(hen)) 
    //.then(egg => cook(egg))
    //.then(meal => console.log(meal));
    
    //위와 같이 쓸 수도 있지만
    //콜백함수를 전달할 때 받아오는 value를 다음 함수로 바로 하나를 호출하는 경우에는 생략해서 아래와 같이 쓸 수 있음 
    .then(getEgg)
    .catch(error=>{
        return '🥐';  //일부에서 문제가 생겨도 전체적인 promise 체인에 문제가 생기지 않도록 대신 전달해준다
    })
    .then(cook)
    .then(console.log)
    
    //중간에 reject써서 error가 발생함
    //마지막에 catch 쓰면 error가 잡힘
    .catch(console.log);  //Error: error! 🐓 => 🍥




