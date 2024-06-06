
function getFullName(firstname: string, surname: string): string {
    return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`
}

// Если объект:
const obj = {
    firstName: 'John',
    surname: 'Doe',
    city: 'Moscow',
    age: 33,
};

function getFullNameObject (userEntity: { firstName: string, surname: 'string' }): string {
    return `${userEntity.firstName} ${userEntity.surname}`
};