const frutas = ['Banana', 'Morango', 'Kiwi', 'Manga'];

for(let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Ligia',
    sobrenome: 'Piva',
    idade: 18
};

for(let info in pessoa){
    console.log(info, pessoa[info]);
}
