let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let varReserva

varReserva = varA;
varA = varB;
varB = varC;
varC = varReserva;

console.log(varA, varB, varC);

//ou

let varA2 = 'A';
let varB2 = 'B';
let varC2 = 'C';

[varA2, varB2, varC2] = [varB2, varC2, varA2]

console.log(varA2, varB2, varC2)