interface IUserService {
    users: number;
    getUsersFromDatabase(): number;
}

class UserService implements IUserService {
    users: number = 10000;

    getUsersFromDatabase(): number {
        return this.users;
    }
}

//decorator:

function nullUsers(obj: UserService): UserService {

    obj.users = 0;
    return obj;
}

let userService1 = new UserService();
console.log(userService1.getUsersFromDatabase()); // 10_000

let userService2 = new UserService();
console.log(nullUsers(userService2).getUsersFromDatabase()); // 0
