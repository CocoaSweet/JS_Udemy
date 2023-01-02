/*
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) //não é recomendado utilizar esse
=== igualdade estrita (valor e tipo)
!= diferente (valor) //não é recomendado utilizar esse
!== diferente estrito (valor e tipo)
*/

const num1 = 1;
const num2 = '1';
const num3 = 1;

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 == num3);
console.log(num1 === num3);

console.log(num3 != num2);
console.log(num3 !== num2);
