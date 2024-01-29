const readline = require('readline-sync');
const imc = require('./bmi');
const exibirIMC = require('./rank');

console.log('--------------------------------');
console.log('Bem vindo ao calculador de IMC!');
console.log('--------------------------------');
const name = readline.question('Qual o seu nome? \n');
console.log('--------------------------------');
console.log(`Olá ${name}!`);
console.log('Me informe alguns dados para calcularmos seu IMC.\nDigite apenas os números.')
console.log('--------------------------------');
const altura = readline.question('Qual a sua altura? \n');
console.log('--------------------------------');
const peso = readline.question('Quanto você pesa? \n');
console.log('--------------------------------');
console.log('Calculando seu IMC...');
console.log('--------------------------------');
const resultado = imc(peso, altura);
exibirIMC(resultado);