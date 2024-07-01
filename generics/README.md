## `Generics`.

В `TS`, **дженерики** позволяют писать код, который можно легко переиспользовать с различными типами.

> **Дженерик** - специальные заполнители(`placeholders``), позволяющие **зарезервировать** место для типа данных, который может быть определён позже.

### 1. Пишем свой generic







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