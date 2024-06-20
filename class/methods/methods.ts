enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number
    status: PaymentStatus
    createdAt: Date
    updatedAt: Date

    constructor(id: number) {
        this.id = id;
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unHoldPayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Платёж не может быть возвращён!');
        }

        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}

const payment = new Payment(1);
const time = payment.getPaymentLifeTime();