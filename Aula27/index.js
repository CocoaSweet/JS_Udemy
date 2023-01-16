let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = ['B','C','A'];
[a, b, c] = letras;

console.log(a, b, c);

const numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const [numeroUm, numeroDois, , numeroQuatro, , numeroSeis, ...resto] = numeros

console.log(numeroUm, numeroDois, numeroQuatro, numeroSeis);
console.log(resto);

//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros2[2][2]);
const [,,[,oito]] = numeros2;
console.log(oito);

//ou

const[lista1, lista2, lista3] = numeros2;
console.log(lista1[2]);
