interface IPayable {
    pay(paymentId: number): void;
    price?: number
}

interface IDeletable {
    delete(): void;
}

class UserImplementation implements IPayable, IDeletable {
    delete(): void {
        console.log('Здесь мы должны удалить')
    }

    pay(paymentId: number): void {
        console.log('Здесь то же что-то реализовать');
    }

}