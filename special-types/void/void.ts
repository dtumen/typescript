function logId(id: number | string): void {
    console.log(id)
}

const a = logId(1);

// 2:
type VoidFunc = () => void;

const f1: VoidFunc = () => 'true';

let b = f1();
