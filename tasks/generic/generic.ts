
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