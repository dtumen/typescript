class newUser1 {
    _login: string
    password: string
    createdAt: Date;
    updatedAt: Date;

    constructor(login: string, password: string) {
        this._login = login;
        this.password = password;
        this.createdAt = new Date();
    }

    set login(l: string) {
        this._login = 'user-' + l;
        this.updatedAt = new Date();
    }
    get login() {
        return this._login;
    }
}