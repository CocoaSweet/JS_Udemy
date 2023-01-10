function getWeekDay(diaSemana) {
    let dia;
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    switch (diaSemana) {
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
        case 6:
            dia = semana[diaSemana];
            return dia;
        default:
            dia = '';
            return dia;
    }
}
const data = new Date();
const diaSemana = data.getDay();
const dia = getWeekDay(diaSemana);

console.log(dia);

/*if (diaSemana === 0) {
    dia = semana[diaSemana];
} else if (diaSemana === 1) {
    dia = semana[diaSemana];
} else if (diaSemana === 2) {
    dia = semana[diaSemana];
} else if (diaSemana === 3) {
    dia = semana[diaSemana];
} else if (diaSemana === 4) {
    dia = semana[diaSemana];
} else if (diaSemana === 5) {
    dia = semana[diaSemana];
} else if (diaSemana === 6) {
    dia = semana[diaSemana];
} else {
    dia = '';
}*/
