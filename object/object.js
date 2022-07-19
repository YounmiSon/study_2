//오브젝트 만드는 법
//1. 리터럴
const obj1 = {};

//2.생성자
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {
    name: 'ellie',
    age : 4
}
print(ellie);

//이미 정했어도 추가할 수 있다 but, 왠만하면 쓰지 말 것
ellie.hasJob = true;
console.log(ellie.hasJob);
//---------------------------------
//object key
//key는 string이어야 한다 
console.log(ellie.name); //코딩하는 순간 그 값을 받아오고 싶을 때, 일반적으로 사용한다

//computed properties
console.log(ellie['name']); //정확하게 어떤 키가 필요한지 모를 때, runtime에서 결정될 때


function printVal(obj, key){
    console.log(obj[key]);
}

printVal(ellie, 'name');

//shorthand
const person1 = {name : 'bob', age : 3}
const person2 = {name : 'jane', age : 5}
const person3 = {name : 'mark', age : 6}

//위처럼 계속 만들기 힘드니까 아예 함수를 만들어서 넣어버림
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age){
    return{
        name, 
        age,
    };
}

//근데 일반적으로 위와 같이 안만들고
//생성자 함수를 만든다
function Person(name, age){
    // this = {}; 생략
    this.name = name;
    this.age = age;
    // return this; 생략
}
const person5 = new Person('jin', 22) //이런 식으로 불러옴


//in operator
//해당하는 operator 안에 key가 있는지 없는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); //정의하지 않은 key 사용하면 undefined 

//for in, for of
console.clear(); //이전 log들 초기화 시킴 안찍히게
for(key in ellie){ //ellie가 가진 key 들이 지역변수를 돌며 출력, 모든 키들을 받아오고 싶을 때
    console.log(key);
}

const array = [1,2,4,5];
for(value of array){
    console.log(value);
}

//cloning
const user = {name : 'amy', age:'5'};
const user2 = user; //user안에 있는 reference의 값이 user2에도 동일하게 할당된다는 말임
user2.name = 'coder';
console.log(user); //coder가 출력됨
 
//Object.assign Object에 모든 객체가 상속되어 있음
const user4 = {};
Object.assign(user4, user);
console.log(user4);

//위의 식을 이렇게 모아서 써도 됨
const userr4 = Object.assign({}, user);
console.log(user4);