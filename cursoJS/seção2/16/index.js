const nome = "Luiz Carlos";
const sobrenome = "Vazo";
const idade = 36;
const peso = 190;
const altura = 1.75;
let anoNascimento = 1989;
let ano = 2026;

let imc = peso / (altura * altura);

let calcIdade = ano - anoNascimento;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg.');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento, '.');