//Synchronous callback 동기적으로 실행
//printImmediately라는 함수에 print라는 콜백을 받아서
function printImmediately(print) {
    //콜백을 바로 실행
    print();
}
//함수를 호출
//아무 인자도 전달받지 않고 그냥 hello 출력하도록 찍음
printImmediately(() => { console.log('hello'); })

//Asynchronous callback 비동기, 언제 실행할지 알 수 없음
//print와 언제 출력할건지 정할 timeout을 인자들로 받음
function printWithDelay(print, timeout) {
    //print라는 콜백함수를 호출하고 timeout을 인자를 전달해서
    //즉 printWithDelay는 setTimeout을 감싸고 있는 함수이고
    // 전달받은 인자를 setTimeout에 요청하는 것임
    setTimeout(print, timeout);
}
printWithDelay(() => console.log(('async callback'), 2000));

//함수 선언이 가장 위로 올라가고 동기 먼저 출력하고
//비동기는 브라우저로 빼놨다가 지정한 시간 후에 실행함

//콜백지옥
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id == 'ellie' && password == '1234') ||
                (id = 'coder' && password == '0000')
            ) {
                //if만족하면 onSuccess 콜백을 부르고 id를 전달함
                onSuccess(id);
            } else {
                //onError라는 콜백을 부르고 Error에 object 만들어 전달
                onError(new Error('not found'))
            }
        }, 2000)
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user == 'ellie') {
                //onSuccess를 호출하면서 객체를 전달해주고
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                //onError를 호출해 error 객체를 만들어 전달
                onError(new Error('no access'))
            }
        }, 1000)
    }
}

//id, password 입력받기 
//로그인 하기
//로그인 성공 시 받아온 id로 역할role을 요청해서 받아오기 
//변수 선언 class니까 new 사용
const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage.loginUser(
    id,
    password,
    //사용자가 로그인이 되었다면
    user => {
        //사용자의 role 받아오기
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log('error');
            }
        );
    },
    error => {
        console.log('error');
    }
);
