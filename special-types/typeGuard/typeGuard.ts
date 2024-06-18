// 1:

// Создаём typeGuard:
function isString(x: string | number): x is string {
    return typeof x === 'string'
}

// используем его в функции
function logIdD1(id: number | string) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id)
    }
}

// 2:
interface User1 {
    name: string
    email: string
    login: string
}

const user10: User1 = {
    name: 'John',
    email: 'Doe@mail.ru',
    login: 'JD'
}

interface Admin {
    name: string
    role: string
}

function isAdmin(user: User1 | Admin): user is Admin {
    return 'role' in user;
}

function setRoleZero(user: User1 | Admin) {
    if (isAdmin(user)) {
        user.role = '0';
    } else {
        throw new Error('user is not an admin')
    }
}