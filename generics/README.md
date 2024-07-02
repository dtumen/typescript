## `Generics`.

В `TS`, **дженерики** позволяют писать код, который можно легко переиспользовать с различными типами.

> **Дженерик** - специальные заполнители(`placeholders``), позволяющие **зарезервировать** место для типа данных, который может быть определён позже.

### 1. Пример использования `generic` для описания функций.
Пример 1. Создаём функцию `logMiddleware`, чтобы она могла логировать значения любых типов:
```ts
function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

logMiddleware<string>('1, 2, 3');
logMiddleware<number>(123);
logMiddleware<Array<number>>([1, 2, 3])
```
- Так как параметры могут быть любого типа, мы используем `generic`.
- Можем при вызове функции передать тип, с которым будет вызываться фукнция.

Пример 2. Создаём функцию `getSplitHalf`, которая возвращает первую половину массива. 
```ts
function getSplitHalf<T>(arr: Array<T>): Array<T> {
    const l = Math.floor(arr.length / 2);
    return arr.splice(0, l);
}

const arrNumbers: number[] = [1, 2, 3, 4, 5, 6];
const arrStrings: string[] = ['1', '2', '3', '4'];

getSplitHalf(arrNumbers); // => [1, 2, 3]
getSplitHalf(arrStrings); // => ["1", "2"]

// Можно записать как:
getSplitHalf<number>(arrNumbers);
getSplitHalf<string>(arrStrings);
```
- так как массив может быть любого типа, то используем тип `generic` с массивом.


### 2. Пример использования `generic` для описания объектов.
Пример 3. Описание объектов с помощью `interface` и `generic`:
```generics.ts
interface ILogLine<T> {
    timeStamp: Date;
    data: T;
}


const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1,
    }
}
```

Пример 4. Использование ключевого слова `extends` с `generic` при работе с классами, интерфейсами и типами.
```generics.ts
interface Vehicle {
run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
vehicle.run = vehicle.run / 0.62;
return vehicle;
}

let vehicle1: Vehicle = {
run: 5,
}

kmToMiles(vehicle1);
```
- используем `extends` для того, чтобы явно указать, какого вида объект можно передавать в функцию. 

## Utility types

### 1. `Record`

> **`Record<keys, type>`** - чтобы типизировать объект по ключу и значению.

- `keys` -тип ключей объекта.
- `types` - тип значений объекта.
- типизируем то, какого типа будут ключи и значения в объекте.

Пример:
```app.ts
type Product = 'apple' | 'banana' | 'cherry';

interface IUser {
	name: string
	age: number
	preferencesFruits: Record<Product, boolean> // Типизировали объект
}

const user1: IUser = {
	name: 'Aldar',
	age: 28,
	preferencesFruits: {
		apple: true,
		banana: false,
		cherry: true,
	}
}
```