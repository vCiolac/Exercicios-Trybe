const { imprimirPersonagens,
  buscarPersonagemPorId } = require('./simpsons');
const readline = require('readline-sync');


async function main() {
  console.log('Olá, bem vindo ao sistema de busca de personagens Simpsons!');
  const exibirLista = readline.question('Você deseja ver a lista de personagens? (S/N) \n');
  if (exibirLista === 'S' || exibirLista === 's') {
    console.log('--- Lista de Personagens ---');
    await imprimirPersonagens();
  }
  const buscarPorId = readline.question('Você deseja buscar um personagem por ID? (S/N) \n');
  if (buscarPorId === 'S' || buscarPorId === 's') {
    const idDesejado = readline.question('Qual o ID do personagem que você deseja buscar? \n');
    console.log(`Personagem: ${await buscarPersonagemPorId(idDesejado)}`);
  }
}
main();