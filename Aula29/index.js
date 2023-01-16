for(let i = 0; i <= 70; i++){
    console.log(`Linha ${i}`);
}

for(let i = 10; i <= 30; i += 2){
    const par = i % 2 === 0 ? 'par' : 'ímpar';  
    console.log(i, par);
}

for(let i = 10; i >=2; i -= 1){
    console.log(`Linha ${i}`);
}

const frutas = ['Maçã', 'Pera', 'Banana', 'Mamão', 'Uva', 'Lichia'];

for(let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);
}
