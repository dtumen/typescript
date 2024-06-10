Сделать типизацию функции:
```ts
async function getFaqs(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
```

Что известно:
1. Запрос (request):
```
{
    "topicId": 5,
    "status": "published" // "draft", "deleted"
}
```
2. Ответ (response):
```
[
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
]
```