function saudacao(nome){
    return `Bom dia, ${nome}!`;
};

const variavel = saudacao('Guigs');
console.log(variavel);

function soma(x = 0 , y = 0){
    const resultado = x+y;
    return resultado;
};

console.log(soma(2,6));
const resultado = soma();
console.log(resultado);

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(16));

//ou arrow function

const potenciacao = (p, q) => p**q;

console.log(potenciacao(2, 10));