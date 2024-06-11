// 1:
function logID(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else if (typeof id === 'number') {
        console.log(id.toFixed())
    } else {
        console.log('typeof boolean', id)
    }
}

// 2. Сужение типов для union объектов:
function logObject(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b)
    }
}