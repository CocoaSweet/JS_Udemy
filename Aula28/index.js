const pessoa = {
    nome: 'Ligia',
    sobrenome: 'Piva',
    idade: 18,
    endereço: {
        rua: 'Rua Azul',
        numero: 10,
        bairro: 'Limoeiro'
    }
}

const {idade, endereço: {rua, bairro}, ...resto} = pessoa;
console.log(idade, rua, bairro);
console.log(resto);
