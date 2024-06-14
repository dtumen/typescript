# Advanced types
"Продвинутые" типы, которые будут изучаться, можно разделить на три группы:
- Основные: `union`, `literal`, `intersection`
- Типы и интерфейсы: `type`, `interface`,
- Специализированные типы: `void`, `unknown`, `never`, `null, undefined`

## 1. Основные типы
**Основные типы** - это те типы, которые мы используем ежедневно. 

### Union type ( | )
**union** - можно перевести как: **объединение**, союз.

- используется когда нужно обозначить, что переменная **может принадлежать одному из нескольких типов**;
- **сужение в объекте** можно делать через оператор `in` (пример 2);

Проблема: мы не можем использовать методы определенного типа, потому что точный тип в контексте `union` не известен 
- когда мы используем тип union, чтобы `ts` нам подсказывал методы, нужно произвести **сужение типов** (пр. 1);

Сужение типов можно осуществлять с помощью:
- `'key' in obj` - проверяем конкретное свойсто в объекте;
- `Array.isArray(arr)` - проверяем массив ли это;
- `typeof id === 'number'` - проверяем на определённый тип;
- `instance of ...`


## 2. Type Aliases and Interfaces

### Type Aliases
Объявляем с помозщью ключевого слова `type NameType = ...`;

-  при использовании `type Aliases` можно использовать **Intersection of types** или `пересечение типов`, с помощью `&`;

**Intersection** - это механизм, который позволяет нам использовать несколько типов как единое целое.
- пересечение типов указывается с помощью оператора - `&`.

Пример 1. Использование **Intersection** для объединения нескольких **type Aliases**:
```ts
type UserType = {
    name: string
    age: number
    skills: string[]
}

type Role = {
    id: number
}

type UserWithRoleType = UserType & Role; // ==> Interserction types with &!

const user: UserWithRoleType = {
    id: 1,
    name: 'John',
    age: 29,
    skills: ['cook', 'chess'],
}
```
- если в типах есть одинаковые поля, то использование `&` может привести к неоднозначным результатам:
```ts
type MonitorType = {
    name: string
    year: number
}

type ManufacturerType = {
    name: "Logitech"
    id: number
}

type MonitorWithManufacturerType = MonitorType & ManufacturerType; // => ?

const monitor: MonitorWithManufacturerType = {
    name: "Logitech",
    id: 2,
    year: 1995,
}
```

### Interfaces
**Interface** - альтернативный способ описания объектов.

Пример 1. Объявление interface:
```ts
interface User { // => без "=" !
    name: string
    age: number
    scores: number[]
}
```
- при объявлении не используем знак `=`

Пример 2. Как объединять interfaces:
```ts
interface Book {
    id: number
    title: string
    author: string
    pages: number
}

interface Student {
    studentID: number
}

interface BookHasStudent extends Student, Book {
    dateReturn: string
}
```

#### Отличие `type` от `interface`.
**Type**:
- чтобы объединить несколько `type` мы используем `&`, а для `interface` - `extends`
- `type` не позволяют дополнять или изменять уже существующие типы, который объявлены с помощью `type` 

**Interface**:
- `interface` нельзя использовать с простыми типами, только с объектами и т.д., в отличие от `type`
- **Способность к расширению и изменению**: 
  - в существующий `interface` можно добавить ещё типы с помощью **merge definition** (см. Пример 3), то есть можно добавить объявив его повторно.
    - полезно когда нужно дополнить тип в каком то библиотечном типе;


