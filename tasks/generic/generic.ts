// 1. toString:
function toString<T>(arg: T): string | undefined {
    if (Array.isArray(arg)) {
        return arg.toString();
    }

    switch (typeof arg) {
        case 'string':
            return arg;
        case'boolean':
        case'number':
        case'symbol':
        case'bigint':
        case'function':
            return arg.toString();
        case 'object':
            return JSON.stringify(arg);
        default:
            return undefined;
    }
}

// 2. sortIdObjectsWithId
interface IUser {
    id: number;
    name?: string;
}

type SortOrder = 'ascending' | 'descending';

function sortIdObjectsWithId<T extends IUser>(arr: Array<T>, order: SortOrder): Array<T> {
    let arrCopy = [...arr];

    return arrCopy.sort((a, b) => {
        switch(order) {
            case 'ascending':
                return a.id - b.id;
            case 'descending':
                return b.id - a.id;
        }
    })
}

const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];

sortIdObjectsWithId(data, 'ascending');
sortIdObjectsWithId(data, 'descending');