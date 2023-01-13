const nomeAlunos = ['Ligia', 'Guilherme', 'Brenda'];

console.log(nomeAlunos);
console.log(nomeAlunos[1]);

nomeAlunos[2] = 'Edson';
nomeAlunos[3] = 'Luiza';
console.log(nomeAlunos);

console.log(nomeAlunos.length);

nomeAlunos[nomeAlunos.length] = 'Lais';
console.log(nomeAlunos);

nomeAlunos.push('Roberto');
console.log(nomeAlunos);

nomeAlunos.unshift('Tatiana');
console.log(nomeAlunos);

const removidoFim = nomeAlunos.pop();
console.log(removidoFim);
console.log(nomeAlunos);

const removidoInicio = nomeAlunos.shift();
console.log(removidoInicio);
console.log(nomeAlunos);

delete nomeAlunos[3];
console.log(nomeAlunos);

console.log(nomeAlunos.slice(1, -2));

const num = 123;

console.log(typeof nomeAlunos);
console.log(nomeAlunos instanceof Array);
console.log(num instanceof Array);
