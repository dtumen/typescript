 /*
 * TODO:
 *  1 - успех
 *  2 - в проссе
 *  3 - отклонён
 * */

 enum StatusCode {
     SUCCESS = 1,
     IN_PROCESS,
     FAILED
 }

 const res = {
     message: 'Платёж успешен',
     statusCole: StatusCode.SUCCESS
 }

 // функция, аргументами которой мы хотим видеть только значения StatusCode:
 function action(status: StatusCode) {
    // ...
 }

 // admin role:
 enum Roles {
     ADMIN,
     USER
 }

 // const enum:
 const enum Role {
     ADMIN,
     USER,
 }