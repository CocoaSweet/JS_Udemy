let nome = 'Ligia';
console.log(nome[0]);

const nomes = ['Ligia', 'Carlos', 'Gui'];
console.log(nomes[0]);

const num1 = [1, 2, 3];
const num2 = num1;

console.log(num1, num2);

num1.push(4);
console.log(num1, num2);

num2.pop();
console.log(num1, num2);

const num3 = [...num2]; /* valor foi copiado e não referenciado */

num2.push(8);
console.log(num2, num3);

const a = {
    nome: 'Maria',
    sobrenome: 'Silva'
};
const b = a;
const c = {...b};

console.log(b, c);

a.nome = 'Lurdes';
console.log(b, c);