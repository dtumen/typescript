const user = {
    firstName: 'John',
    surname: 'Doe',
    city: 'Moscow',
    age: 33,
};

//
function getFullNameUser (userEntity: { firstName: string, surname: 'string' }): string {
    return `${userEntity.firstName} ${userEntity.surname}`
};

