function isLoginValid(login, min = 4, max = 16) {
  if (min <= login.length && login.length <= max) {
    return true;
  }
  return false;
}

function isLoginUnique(allLogins, login) {
  'use strict';
  for (let i = 0; i < allLogins.length; i += 1) {
    if (allLogins[i] == login) {
      return false;
    }
  }
  return true;
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  if (isLoginValid(login) === false) {
    message = ERROR;
    return message;
  }
  if (isLoginUnique(allLogins, login) === false) {
    message = REFUSAL;
    return message;
  }
  logins.push(login);
  message = SUCCESS;
  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(logins);
// console.log(addLogin(logins, 'Ajax'));
