// 1:
class User {
    name: string
    age: number

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(nameOrage?: string | number) {
        if (typeof nameOrage === 'string') {
            this.name = nameOrage;
        } else if (typeof nameOrage === 'number') {
            this.age = nameOrage;
        }
    }
}

const userName = new User('John'); // => { name: 'John' }
const userAge = new User(33); // => { age: 33 }
