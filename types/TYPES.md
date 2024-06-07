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

## 4. Types of arrays: 
```ts
const skills: string[] = ['Dev', 'DevOps']; // Array<string> - но не очень так делать!
```

## 5. Type of Tuples:
**tuple** - массив ограниченный длины, где **каждый элемент** типизорован.
```ts
const skill: [number, string] = [1, 'Dev'];
```
- только 2 элемента!
- В рамках компиляции: типизация и ограничение по длине и типам элементов.
- В рамках выполнения программы: работают как обычные массивы.
- Обращение к элементам кортежа по индексу, но с ограничениями на доступ вне заданной длины.
- Возможность добавления элементов через методы push, pop в рантайме, несмотря на типизацию.
- Использование деструктуризации для удобного доступа к элементам кортежа.

Массив, в котором первые 2 элемента: `number`, `string`, а остальные - `boolean`:
```ts
const arr: [number, string, ...boolean[]] = [1, 'JS', true, true]; // OK!
```

