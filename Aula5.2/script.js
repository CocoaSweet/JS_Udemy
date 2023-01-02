/*
&& - AND
|| - OR
! - NOT
*/

const teste = true && false && true && true;
const teste2 = true && true && true && true;

console.log(teste, teste2);

const teste3 = true || true;
const teste4 = true || false;
const teste5 = false || false;

console.log(teste3, teste4, teste5);

const user = 'Ligia';
const password = 'abc1234567';

const login = user === 'Ligia' && password ==='abc1234567';
console.log(login);

console.log(!true);
