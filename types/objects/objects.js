"use strict";
const user = {
    firstName: 'John',
    surname: 'Doe',
    city: 'Moscow',
    age: 33,
};
//
function getFullNameUser(userEntity) {
    return `${userEntity.firstName} ${userEntity.surname}`;
}
;
