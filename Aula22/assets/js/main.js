function naoGlobal() {
    const form = document.querySelector('.form');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log('evento evitado');

        const inputPeso = form.querySelector('.peso');
        const inputAltura = form.querySelector('.altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso && !altura) {
            setResultado('Insira valores válidos', false);
            return;
        } else if (!peso) {
            setResultado('Insira um peso válido', false);
            return;
        } else if (!altura) {
            setResultado('Insira uma altura válida', false);
            return;
        }

        const imc = calcularImc(peso, altura);
        const resImc = resultadoImc(imc);

        const mensagem = `Seu IMC é ${imc} (${resImc})`;

        setResultado(mensagem, true)
    }

    function resultadoImc(imc) {
        const resultado = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if (imc >= 40) return resultado[5];
        if (imc >= 35) return resultado[4];
        if (imc >= 30) return resultado[3];
        if (imc >= 25) return resultado[2];
        if (imc >= 18.5) return resultado[1];
        if (imc < 18.5) return resultado[0];
        
    }

    function calcularImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function criarP() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(mensagem, isValid) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';

        const p = criarP();

        if(isValid) {
            p.classList.add('p-resultado');
        } else {
            p.classList.add('p-invalido');
        }

        p.innerHTML = mensagem;
        resultado.appendChild(p);
    }

    form.addEventListener('submit', recebeEventoForm);
}

naoGlobal();
