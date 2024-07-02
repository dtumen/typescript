// 1. logMiddleware:
function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

logMiddleware<string>('1, 2, 3');
logMiddleware<number>(123);
logMiddleware<Array<number>>([1, 2, 3])


// 2. getSplitHalf:
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

// 3. Типизация logLine с помощью generic:
interface ILogline<T> {
    timeStamp: Date;
    data: T
}

const logLine: ILogline<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1, // типизируем с помощью generic
    }
}

// 4. Использование extends с generic:
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