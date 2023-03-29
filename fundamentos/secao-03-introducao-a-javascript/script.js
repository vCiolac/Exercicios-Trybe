let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log('Os numeros são: ' + numbers[index]);
}

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index]
}

console.log('A soma de todos os numeros é:', sum)

let arit = sum / numbers.length;

console.log('A soma aritmétrica de todos os numeros é:', arit)

if (arit > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual que 20');
}

let numMaior = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numMaior < numbers[index]) {
    numMaior = numbers[index]
  }
}

console.log('O maior número entres eles é:', numMaior)

let numImpares = [];
let numPares = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numImpares.push(numbers[index]);
  } else if (numbers[index] % 2 === 0){
    numPares.push(numbers[index]);
  }
}

if (numImpares.length > 1) {
  console.log('Existem ' + numImpares.length + ' números ímpares, e eles são:', numImpares);
} else if (numImpares.length < 1){
  console.log('Nenhum valor ímpar encontrado');
} else if (numPares.length > 1) {
  console.log('Existem ' + numPares.length + ' números pares,e eles são:', numPares);
}

let numMenor = numMaior;

for (let index = 0; index < numbers.length; index += 1) {
  if (numMenor > numbers[index]) {
  numMenor = numbers[index];
  }
}

console.log('O menor número entres eles é:', numMenor)

let umAoVtCinco = [];

for (let index = 0; index <= 24; index +=1){
  umAoVtCinco.push(0 + index+1);
}
console.log(umAoVtCinco);

for (let index = 0; index < umAoVtCinco.length; index += 1){
  console.log(umAoVtCinco[index] + ' dividido por 2 dá: ' + umAoVtCinco[index] / 2);
}