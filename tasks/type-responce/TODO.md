# Задание - Типизируем ответ от сервера

1. Мы делаем запрос в виде платежа:
```json
{
    "sum": 10000,
    "from": 2,
    "to": 4
}
```
2. Получаем ответ:
- в случае успешного ответа:
```json
{
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
}
```
- в случае неуспешного:
```json
{
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
}
```


## Разбор:

1. Часть 1: 
- Использование `enum` для типизации успешного и неуспешного ответа;
- `IPayment` выносится в отдельный `interface`, потому что в дальнейшем будет использоваться

2. Часть 2:
- описываем `IDataSuccess`, который будет включать поля `IPayment`
- описываем тело ответа в случае неуспешного запроса: `IDataFailed`

3. Часть 3:
- создаём 2 `interfaces` для того, чтобы разделить логику на успешный и неуспешный запрос.
- если писать их в одном `interface` с использованием `|`, тогда получится, что мы можем получить тело неуспешного ответа при успешном запросе - то есть нарушается логика, но при этом типизация пройдёт.
 