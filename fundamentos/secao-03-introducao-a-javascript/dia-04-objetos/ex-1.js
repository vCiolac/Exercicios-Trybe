let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem)

info['recorrente'] = 'Sim';
console.log(info);

for (keys in info) {
  console.log(keys)
}

for (keys in info) {
  console.log(info[keys])
}

let newObj = Object.assign({}, info)

newObj.personagem = 'Tio Patinhas';
newObj.origem = 'Christmas on Bear Mountain, Dell’s Four Color Comics #178';
newObj.nota = 'O último MacPatinhas';

for (keys in newObj) {
  if (
    keys === 'recorrente' &&
    newObj[keys] === 'Sim' &&
    info[keys] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[keys] + ' e ' + newObj[keys]);
  }
}
