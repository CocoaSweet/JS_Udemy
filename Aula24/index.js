const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia);
console.log(data.toString());

const data2 = new Date(2022, 0, 5, 15, 15, 15, 1000);
console.log(data2.toString());

const data3 = new Date('2023-01-06 15:03:30');//pode ser usado o valor de Date.now()
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1);
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay());
console.log(data3.toString());
console.log(Date.now());

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());
    const segundo = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);
