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