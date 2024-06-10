"use strict";
/*
* TODO:
*  1 - успех
*  2 - в проссе
*  3 - отклонён
* */
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платёж успешен',
    statusCole: StatusCode.SUCCESS
};
// функция, аргументами которой мы хотим видеть только значения StatusCode:
function action(status) {
    // ...
}
// admin role:
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
