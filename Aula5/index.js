const nome = 'Ligia';
const sobrenome = 'Piva de Santana';
const idade = 18;
const peso = 47;
const alturaEmM = 1.63;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso/(alturaEmM*alturaEmM);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg,');
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(nome, sobrenome, 'nasceu em', anoNascimento + '.');