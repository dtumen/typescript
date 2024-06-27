class Product {
    id: number
    title: string
    price: number
    constructor(id: number, title: string, price: number) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

class Delivery {
    date: Date;

    constructor(date: Date) {
        this.date = date;
    }
}

class HomeDelivery extends Delivery {
    address: string

    constructor(date: Date, address: string) {
        super(date);
        this.address = address;
    }
}

class ShopDelivery extends Delivery {
    storeId: number

    constructor(date: Date, storeId: number) {
        super(date);
        this.storeId = storeId;
    }
}

type DeliveryOptions = ShopDelivery | HomeDelivery;


class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;

    addProduct(product: Product): void {
        this.products.push(product);
    }

    deleteProduct(productId: number): void {
        this.products.filter((p: Product) => p.id !== productId);
    }

    getSum(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((acc, p: number) => acc + p, 0);
    }

    setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery;
    }

    checkout() {
        if (this.products.length === 0) {
            throw new Error('Список продуктов пуст')
        }

        if (!this.delivery) {
            throw new Error('Не указан способ доставки')
        }

        return {success: true}
    }
}