// 1:

interface Data {
    group: number;
    name: string
}

const data1: Data[] = [
    { group: 1, name: 'a' },
    { group: 2, name: 'b' },
    { group: 1, name: 'c' },
];

interface IGroup<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(arr: T[], key: keyof T): IGroup<T> {
    return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
        const itemKey = item[key];
        let currentEl = map[itemKey];

        if (Array.isArray(currentEl)) {
            currentEl.push(item);
        } else {
            currentEl = [item];
        }
        map[itemKey] = currentEl;
        return map;
    }, {})
}