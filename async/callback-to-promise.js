//콜백지옥 고치기
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id == 'ellie' && password == '1234') ||
                    (id == 'coder' && password == '0000')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'))
                }
            }, 2000);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'))
                }
            }, 1000)
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage
.loginUser(id, password) //로그인하고
.then(userStorage.getRoles) //로그인 성공하면 user가 전달됨, user이용해서 getRoles호출
.then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
.catch(console.log); //에러생기면 그냥 console에 찍기