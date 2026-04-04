const numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto1 = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto1.innerHTML += `<p>A raiz quadrada é: ${numero ** 0.5}.</p>`;
texto1.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto1.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto1.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto1.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;