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