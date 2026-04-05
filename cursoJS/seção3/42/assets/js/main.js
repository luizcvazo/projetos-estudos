const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido!' , false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida!', false);
        return;
    }

    const imc = getImc (peso, altura)
});

function getImc () {
    
}

function criarP (className) {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criarP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}