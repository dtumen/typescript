- `Typescript`-код, написанный на ts, в обычный JavaScript код;
- `TypeScript` может автоматически определять типы на основе присвоенного значения, а можно задать их явно(лучше явно);

## 1. Types of variables (типизация переменных):
```ts
let num: number;
let str: string;
let bool: boolean;
```

## 2. Types of function:
```ts
function getFullName(firstname: string, surname: string): string {
    return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`
}
```

## 3. Types of objects:
```ts
const user = {
    firstName: 'John',
    surname: 'Doe',
    city: 'Moscow',
    age: 33,
};

//
function getFullNameUser (userEntity: { firstName: string, surname: 'string' }): string {
    return `${userEntity.firstName} ${userEntity.surname}`
};
```
- типизируем аргументы функции с помощью `{ описание свойтв объекта }`,
- так лучше **не делать**! Лучше вынести в отдельный `type` или `interface` и потом использовать его в качестве типа,

