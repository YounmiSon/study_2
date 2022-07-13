//객체리터럴
let user = {
   name :"mike",
   age : 30,
}

//생성자함수
function User(name, age){ //보통 생성자 함수 이름의 첫글자는 대문자로 씀, name, age를 인자로 받는다
   //this = {} 빈 객체를 만들고 this에 할당함 
   this.name = name; //함수 본문을 실행하면서 this에 프로퍼티들을 추가한다 
   this.age = age;
   //return this; //그리고 this를 반환한다
}
let user1 = new User("mike", 30);  //new 연산자를 이용해 함수를 호출하고 위의 순서대로 함수를 실행한다
let user2 = new User("tom", 24);
let user3 = new User("jane", 36);

//메서드 추가
function User(name, age){ 
   this.name = name; 
   this.age = age;
   this.sayName = function(){  //위의 함수에서 sayName이라는 메서드를 추가함
      console.log(this.name);  //여기서 this는 user5이다
   }
}
let user5 = new User("han", 40)
user5.sayName(); //"han"

//상품 객체 생성
function Item(title, price) {
   this.title = title;
   this.price = price;
   this.showPrice = function(){
      console.log(`가격은 ${price}원 입니다`);
   }
   //return this
}
const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 5000);
const item3 = new Item("지갑", 4000);

console.log(item1, item2, item3);
item3.showPrice(); //가격은 4000원 입니다


//computed property
let a = 'age';
const useruser = {
   name: 'mike', 
   [a] : 30  //위의 a는 a : 30 뿐만아니라 대괄호 안에 넣어서 쓰면 변수 a에 할당된 값이 들어간다 //age : 30
}

//객체에서 사용할 수 있는 메서드 
Object.assign() //객체를 복제할 수 있다
const uuser = {
   name : "nike",
   age: 30
}
const cloneuuser = uuser; // 변수 하나 선언해서 넣는다고 복제되는거 아님, 객체 자체가 아니라 객체에 의한 참조값이 들어간다 
//따라서 완전히 복제하기 위해서는 assign() 메서드를 써야한다 

//const newuser = Object.assign({}, user); //이렇게 하면 빈 객체에 user가 병합된다 
//{} + {name : "nike", age: 30} = {
//   name : "nike",
//   age: 30
//   }

//만약 이름을 바꾼다면?
const newuser = Object.assign({}, user);
newuser.name = "tom";
console.log(user.name); // "nike" 그대로 나옴
newuser != user 

//여러 객체 합치려면?
//Object.assign({gender:"male"}, user); 하면 성별값만 더해져서 gender:"male", name : "nike", age: 30 //이렇게 나오고
//Object.assign({name : "tom"}, user); 하면 덮어씌워져서 나중에 입력한 값이 출력된다


Object.keys() //키 배열반환
// const user ={
//    name: "nike"
// }
// const info1 ={
//    age: 30
// }
// const info2 ={
//    gender:"male"
// }
// Object.assign(user, info1, info2)  //user에 다 병합되고 이걸 keys 메서드를 써보면?!

// const user ={
//    name : "nike",
//    age: 30,
//    gender:"male",
//   }
Object.keys(user); //["name", "age",  "gender"] 이렇게 키 값을 배열로 반환하고 

Object.values() //값 배열을 반환하므로 
Object.values(user) //["nike", 30, "male"]이라는 value 값만 반환한다 

Object.entries() //키, 값 배열을 모두 반환
Object.entries(user) //["name", "nike"], ["age", 30], ["gender", "male"] 이렇게 각각의 배열이 나옴

Object.fromEntries()// 키 값 배열을 객체로 반환
Object.fromEntries(arr)//const arr = [["name", "nike"], ["age", 30], ["gender", "male"]]; <,이렇게 생긴 배열 원형을 객체로 바꾸어 반환

//예제
let n = "name";
let g = "age";

const userr ={
   [n]: "miike", 
   [g] : 30,
   [1+4] : 5,
}
console.log(userr) //{5: 5, name : "miike", age : 30}

//예제2 - 어떤게 key가 될지 모르는 객체를 만들 때 이용
function makeObj(key, val){
       return{
        [key]: val,
       };
    }

    const obj = makeobj("나이",33);
    console.log(obj); //{나이 : 33}


//심볼
//지금까지 객체는 property key 문자형으로 만들었음
//const a = Symbol(); 
//const b = Symbol(); 
//생긴건 같지만 a === b; 하면 false를 반환한다 즉 유일한 식별자로, 유일성이 보장된다

const id = Symbol('id')
const useer ={
   name: 'mike',
   age : 30,
   [id] : 'myid'
}

//결과
//{~~ , Symbol(id): "myid"}
//근데 Object.keys() 이런 객체 메서드 쓰면 출력이 안됨! 꽁꽁 숨겨져있음
//특정 객체의 원본 데이터를 건드리지 않고 추가할 수 있다

Symbol.for() //전역 심볼
//하나의 심볼만 보장받을 수 있음
//없으면 만들고, 있으면 가져오기 때문
//Symbol함수는 매번 다른 symbol 값을 생성하지만
//Symbol.for 메서드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
Symbol.keyFor() //안에 변수를 넣어주면 이름을 출력해줌

//다른 개발자가 만들어 놓은 객체
const happy = {
   name: "mike",
   age: 40,
}

//내가 추가하는 작업
const showname = Symbol("showname")
happy[showname]=function(){
   console.log(this.name)
}

happy[showName]();

//사용자가 접속하면 보는 메세지
for(let key in user){
   console.log(`His ${key} is ${user[key]}.`)
}

//배열
//splice 특정 요소 지우고 추가
//slice n부터 m까지 반환

//forEach()
let arrr = ["a", "b","c"]

arrr.forEach((alphabet, index)=>{
   console.log(`${index +1}, ${alphabet}`)
})

//1, a 2, b 3,c
