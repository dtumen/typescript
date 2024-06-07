// tuple:
const skill: [number, string] = [1, 'JavaScript'];
const [id, skillName] = skill;

// Tuple 2:
const arr: [number, string, ...boolean[]] = [1, 'JS', true, true]; // OK!

// не путать с Union, потому что тогда мы можем сделать массив неограниченной длины:
type UserType = Array<string | number>;
const user1: UserType  = [1, 'John'];
const user2: UserType = [1, 'John', 'Aleksandr']; // OK!
