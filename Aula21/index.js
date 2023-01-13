/*
0 - 11 - bom dia
12 - 17 - boa tarde
18 - 23 - boa noite
*/

const hora = 9;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}

const din = true;

if (din) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
