# Упражнение: TypeGuard ответа

Дано:
```ts
interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}
```

## Цель:
- Создание и использование `TypeGuard` для **проверки статуса платежа**.
- Разработка функции, возвращающей ID из базы данных в случае успешного ответа или генерирующей ошибку при неуспешном.
  - название функции: `getIdFromData`


## Ответ
<details>
<summary><b>Решение:</b></summary>

1. `TypeGuard` для успешного платежа:

```ts
type Res = IResponseSuccess | IResponseFailed;

function isSuccess(response: Res): response is IResponseSuccess {
  if (response.status === PaymentStatus.Success) {
    return true;
  }
  return false;
}
```
- использовать `typeGuard` будем ниже.

2. Функция, которая возвращает `ID`
```ts
const getIdFromData = (response: Res): number => {
  if (isSuccess(response)) {
    return response.data.databaseId;
  } else {
    throw new Error(response.data.errorMessage)
  }
}
```
</details>