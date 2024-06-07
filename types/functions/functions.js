"use strict";
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
// Если объект:
const obj = {
    firstName: 'John',
    surname: 'Doe',
    city: 'Moscow',
    age: 33,
};
function getFullNameObject(userEntity) {
    return `${userEntity.firstName} ${userEntity.surname}`;
}
;
