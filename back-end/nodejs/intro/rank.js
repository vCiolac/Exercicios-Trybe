const exibirIMC = (resultado) => {
  if (resultado === 'Peso ou altura inválidos' || resultado === 'Seu IMC é 0.00') {
    console.log('Peso ou altura inválidos');
  } else {
    console.log(`Seu IMC é ${resultado}`);
    if (resultado < 18.5) {
      console.log('Abaixo do peso (magreza)');
    } else if (resultado < 25) {
      console.log('Peso normal');
    } else if (resultado < 30) {
      console.log('Acima do peso (sobrepeso)');
    } else if (resultado < 35) {
      console.log('Obesidade grau I');
    } else if (resultado < 40) {
      console.log('Obesidade grau II');
    } else {
      console.log('Obesidade graus III e IV');
    }
  }
}

module.exports = exibirIMC;