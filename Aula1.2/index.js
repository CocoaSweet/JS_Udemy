/*const funcionario1 = {
    nome: 'Kayle', sobrenome: 'Silva', idade: 44
};

console.log(funcionario1.idade);
console.log(funcionario1.sobrenome);*/

function criarFuncionario (nome, sobrenome, idade){
        return{
            nome: nome, sobrenome: sobrenome, idade: idade
        };
};

const funcionario1 = criarFuncionario('Fulano', 'Souza', 88);
const funcionario2 = criarFuncionario('Beltrana', 'Silva', 34);
const funcionario3 = criarFuncionario('Sicrano', 'Oliveira', 56);

console.log(funcionario1.nome, funcionario2.sobrenome, funcionario3.idade);

const funcionario4 = {
    nome: 'Roberta', sobrenome: 'Moreno', idade: 22,

    fala() {
        console.log(`${this.nome} ${this.sobrenome}, está te dizendo oi...`);
    },

    falaIdade() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++
    }
};

funcionario4.fala();
funcionario4.falaIdade();
funcionario4.incrementaIdade();
funcionario4.falaIdade();
funcionario4.incrementaIdade();
funcionario4.falaIdade();
funcionario4.incrementaIdade();
funcionario4.falaIdade();