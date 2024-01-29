const IMC = (peso, altura) => {
  if(isNaN(peso) || isNaN(altura)) {
      return 'Peso ou altura inválidos';
  }
  if (altura > 100) {
      altura = altura / 100;
  }
  const imc = peso / (altura * altura);
  const imcArredondado = imc.toFixed(2);
  return imcArredondado;
};

module.exports = IMC;