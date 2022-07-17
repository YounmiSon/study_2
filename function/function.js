 //function
 //함수 하나에 한 가지 기능
 //함수는 동사 형태의 이름을 지어야함
 //function은 object

 function printhello() {
    console.log('hello');
 }
 printhello(); //hello만 출력하기 때문에 쓸모없는 함수임

//따라서 파라미터를 줘서 원하는 메세지를 입력하게 하는 것이 좋음
function log(message){
    console.log(message);
}
log('hello');

//parameter
//primitive 타입 : 메모리에 value가 그대로 저장되어 있기 때문에 value가 그대로 전달이 되고
//object 타입 : 메모리에 referene가 전달되어진다 
//changeName이라는 함수는 전달된 obj에
function changeName(obj){
    //name을 무조건 coder로 변경하는 함수
    obj.name = 'coder';
}

const ellie = { name: 'ellie'}; 
//ellie라는 object를 만들어 할당해주면 메모리에는 object가 만들어진 reference가 메모리에 들어가게 되고 
//reference는 object를 메모리 어딘가에 가리키고 있다
changeName(ellie);  //coder로 name이 바뀜
console.log(ellie);

//default parameters
//from = 'unknown' ->이렇게 원하는 default 값을 지정해놓으면 사용자가 parameter를 전달하지 않을 때 대체되어 사용된다 
function showMessage(message, from = 'unknown'){ 
    
    console.log(`${message} by ${from}`);
}
showMessage('hi')  //messare만 전달됨

//rest parameters
function printAll(...args){ //... 쓰면 parameter가 배열형태로 전달된다
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    //of를 써서 간단히 쓰거나
    // for(const arg of args){
    //     console.log(arg);
    // }

    //forEach로 간단하게 표현할 수도 있다
    //args.forEach((arg => console.log(arg)))
}
printAll('dream', 'coding', 'ellie')

//scope
let globalMessage = 'global'
function printMessage(){
    let message = 'hello'; //지역변수
    console.log(message);
    console.log(globalMessage);
    function printAnother(){ //부모 메세지는 출력이 가능하지만 부모 scope에서는 자식 메세지 출력 못함
        console.log(message);
        let childMessage = 'hello'
    }
}
printMessage();
// console.log(message); //밖에서는 message를 출력할 수 없다


//함수 표현
const print = function(){ //익명함수
    console.log('print');
}
print(); //함수 선언도 호이스팅이 됨
const printAgain = print;  //변수에 할당하면
printAgain(); //또 불러올 수 있음

//callback
function randomQuiz(answer, printYes, printNo) {
    if(answer == 'love u'){ //answer가 'love u'인 경우에만
        printYes(); //printYes를 호출한다
    }else{
        printNo();
    }
}

//printYes, printNo일 때 실행할 내용을 함수에 할당해놓음
const printYes = function(){
    console.log('yes');
}
const printNo = function(){
    console.log('No');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love u', printYes, printNo);

//arrow function
//항상 익명함수이며 간결하게 쓸 수 있다
const simplePrint = () => console.log('simplePrint');
const add = (a,b) => a + b;

//IIFE : 선언과 동시에 호출하기
(function hello(){
    console.log('IIFE');
})();