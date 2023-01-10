//SOLUÇÃO MAIS SIMPLES

/*
const h1 = document.querySelector('.container h1');
const data = new Date();
const opçoes = {
    dateStyle: 'full'
};

h1.innerHTML = data.toLocalDateString('pt-BR', opçoes);
*/

function showDate(){
    const data = new Date();
    const diaSemana = data.getDay();
    const dia = getWeekDay(diaSemana);
    const dataDetalhada = getDateNHours(data);
    const h1 = document.querySelector('.container h1');

    function getWeekDay(diaSemana){
        let dia;
        const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

        switch(diaSemana){
            case 0:
                dia = semana[diaSemana];
                return dia;
            case 1:
                dia = semana[diaSemana];
                return dia;
            case 2:
                dia = semana[diaSemana];
                return dia;
            case 3:
                dia = semana[diaSemana];
                return dia;
            case 4:
                dia = semana[diaSemana];
                return dia;
            case 5:
                dia = semana[diaSemana];
                return dia;
            case 6:
                dia = semana[diaSemana];
                return dia;
            default:
                dia = ''
                return dia;
        }
    }

    function mesEscrito(mes){
        let mesEscrito;
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        switch(mes){
            case 0:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 1:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 2:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 3:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 4:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 5:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 6:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 7:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 8:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 9:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 10:
                mesEscrito = meses[mes];
                return mesEscrito;
            case 11:
                mesEscrito = meses[mes];
                return mesEscrito;
            default:
                mesEscrito = '';
                return mesEscrito;
        }
    }
    
    function zeroEsquerda(num){
        return num < 10 ? `0${num}` : num;
    }

    function getDateNHours(data){
        const dia = zeroEsquerda(data.getDate());
        const mes = mesEscrito(data.getMonth());
        const ano = data.getFullYear();
        const hora = zeroEsquerda(data.getHours());
        const min = zeroEsquerda(data.getMinutes());
        return `${dia} de ${mes} de ${ano} ${hora}:${min}`;
    }

    h1.innerHTML = `${dia}, ${dataDetalhada}`;
}

showDate()
