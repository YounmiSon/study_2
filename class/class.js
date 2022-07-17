//class
//연관있는 데이터(속성(fileds), 행동(method))를 묶어두는 container 같은 역할을 한다

// class person{
//     name; //properties, 속성(fileds)
//     age;
//     speak(); //function, 행동(method)
// }

//간혹 class 안에 fileds만 들어있는 경우도 있다 : data class
//이렇게 관련있는 함수나 변수를 묶어놓은 것을 class 라고 하고 
//class 안에서도 내부적으로 보여지는 변수와 밖에서 보일 수 있는 변수들을 나눈 것을 캡슐화라고 한다
//class를 이용해 상속과 다양성이 일어날 수 있는데 객체지향언어이기 때문에 가능하다

//class는 일종의 틀 같은 개념으로 자체에는 데이터가 들어있지 않고 한 번만 선언한다
//class 안에 데이터를 넣어서 만든 것이 object이다
//class를 이용해서 새로운 인스턴스를 생성하면 object가 된다(그제서야 메모리에 할당됨)

//class 선언
class Person {
    //생성자를 만들어 object를 만들 때 필요한 데이터를 전달
    constructor(name, age){
        //전달된 데이터를 바로 할당해줌
        this.name = name;
        this.age= age;
    }
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);  //constructor 안에 있는 name과 age 전달
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); //함수 호출

//getter, setter
// class User{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     //get이라는 키워드를 통해 값을 return하고 
//     //getter을 정의하는 순간 this.age는 메모리에 올라가있는 데이터를 읽어오는 것이 아니라
//     //바로 getter를 호출하게 된다 
//     get age(){
//         return this.age;
//     }
//     //set이라는 키워드를 통해 값을 설정할 수 있다 단, set은 값을 설정하기 때문에 value를 받아와야 함
//     //setter를 정의하는 순간 = age 을 호출할 때 바로 메모리에 값을 할당하는 것이 아니라
//     //바로 setter를 호출하게 된다, 즉 메모리의 값을 업데이트 하는 것이아니라 settet의 호출을 무한정 반복하는 것이다
//     set age(value){
//         this.age = value
//     }
//     //단 이렇게만 하면 call stack이 초과되었다고 뜬다 
// }

// const user1 = new User('steve', 'jobs', -1);
// console.log(user1.age); //-1, but, age가 -1이 되는건 말이 되지 않으니까
// //입력값이 잘못 되더라도 좀 더 방어할 수 있기 위해 사용하는 것이 바로 getter와 setter이다

//getter와 setter를 호출하는 문제점 해결?
//getter와 setter안에서 사용하는 변수의 이름을 약간 다르게 지정한다 언더바, 숫자 등...
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    
    set age(value){
        //이렇게 경고 날려도 되고
        // if(value < 0){
        //     throwError('age can not be negative')
        // }
        // this._age = value
        this._age= value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'jobs', -1);
console.log(user1.age);

//상속과 다양성
//예를 들어 삼각형, 사각형 등의 도형을 그린다고 치면 너비, 높이, 색.. 등이 중복되는 요소이니까 그걸 class로 묶어주는 것
class Shape{
    constructor(width, height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
    }
    class Rectangle extends Shape{} //class 확장
    class Triangle extends Shape{
        //삼각형은 넓이 구하는 방법이 다르니까 함수를 재정의 해주는데 이것이 바로 오버라이딩이다
        getArea(){
            return(this.width * this.height) /2;
        }
        draw(){
            //공통적으로 정의한 draw도 그려주면서 새로 재정의도 하고 싶다면
            //super를 이용해 부모의 메서드를 불러오면 다 호출 가능
            super.draw();
            console.log('▲');
        }
    } 

    const rectangle = new Rectangle(20, 20, 'blue');
    rectangle.draw();
    console.log(rectangle.getArea());

    const triangle = new Triangle(20, 20, 'red');
    triangle.draw();
    console.log(triangle.getArea());


