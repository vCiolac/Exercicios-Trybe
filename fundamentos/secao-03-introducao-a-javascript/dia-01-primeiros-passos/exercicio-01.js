let a = 16;
let b = 4;


console.log(a + b, a - b, a * b, a / b, a % b)

if (a > b) {
  console.log('O maior entre ' + b + ' e ' + a + ' é ' + a)
} else if (a < b) {
  console.log('O maior entre ' + b + ' e ' + a + ' é ' + b)
}

let c = 9;

if (a > b && a > c) {
  console.log('O maior entre ' + c + ', ' + b + ' e ' + a + ' é ' + a)
} else if (b > c && b > a) {
  console.log('O maior entre ' + c + ', ' + b + ' e ' + a + ' é ' + b)
} else if (c > b && c > a) {
  console.log('O maior entre ' + c + ', ' + b + ' e ' + a + ' é ' + c)
}

let posOuNeg;

if (posOuNeg > 0) {
  console.log('O valor é positivo!')
} else if (posOuNeg < 0) {
  console.log('O valor é negativo!')
} else {
  console.log('O valor é zero!')
}

let aA = 30;
let aB = 45;
let aC = 15;

let somaDosAngulos = aA + aB + aC;
let angulosPositivos = aA > 0 && aB > 0 && aC > 0;

if (angulosPositivos) {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Ops, deu algum erro!');
}


pecaDeXadrez = 'cavalo';
let movimentos = '?';

switch (pecaDeXadrez) {
  case 'peao':
    movimentos = 'Somente para frente, e no primeiro movimento desta peça no jogo pode-se andar duas casas.';
    break;
  case 'cavalo':
    movimentos = 'Em "L", duas casas para cima e duas para o lado. ';
    break;
  case 'bispo':
    movimentos = 'Somente nas diagonais, pode andar quantas casas quiser.';
    break;
  case 'torre':
    movimentos = 'Somente nas linhas vertical ou horizontal, quantas casas quiser.';
    break;
  case 'rainha':
    movimentos = 'Seu movimento é a soma do movimento de todas as outras peças. Pode andar para qualquer direção, quantas casas quiser.';
    break;
  case 'rei':
    movimentos = 'Em qualquer direção, somente uma casa por turno.';
    break;
}

console.log(movimentos);

let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

if ( a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ) {
  console.log(true)
} else {
  console.log(false)
}

if ( a % 2 === 1 || b % 2 === 1 || c % 2 === 1 ) {
  console.log(true)
} else {
  console.log(false)
}

let custo = 500;
let valorDeVenda = 1300;
let lucro = valorDeVenda - custo;
let numDeVendas = 1000;

if (numDeVendas === numDeVendas) {
  console.log(lucro * numDeVendas)
} else {
  console.log('Erro!')
}

let salarioBruto = 5555;
let salarioBase;
let salarioLiquido;

if (salarioBruto <=  1556.94){
  salarioBase = salarioBruto - (0.08*salarioBruto);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  salarioBase = salarioBruto - (0.09*salarioBruto);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  salarioBase = salarioBruto - (0.11*salarioBruto);
} else if (salarioBruto >= 5189.83){
  salarioBase = salarioBruto - 570.88;
}

if (salarioBase <=  1903.98){
  console.log('salario = '+ salarioBase + ' & ' +'Isento de Imposto de Renda');
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
  salarioLiquido = salarioBase - ((0.075*salarioBase) - 142.80)
  console.log(salarioLiquido)
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
  salarioLiquido = salarioBase - ((0.15*salarioBase) - 354.80)
  console.log(salarioLiquido)
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
  salarioLiquido = salarioBase - ((0.225*salarioBase) - 636.13)
  console.log(salarioLiquido)
} else if (salarioBase >= 4664.69 && salarioBase <= 5189.82){
  salarioLiquido = salarioBase - ((0.275*salarioBase) - 869.36)
  console.log(salarioLiquido)
} 

