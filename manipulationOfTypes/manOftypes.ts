// 1:
function getValue<T, K extends  keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const userAdmin = {
    id: 1,
    name: 'John',
    age: 32,
}

const nameOfUserAdmin = getValue(userAdmin, 'name');