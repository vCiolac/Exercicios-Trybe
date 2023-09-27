const { 
  imprimirPersonagens,
  buscarPersonagemPorId,
  criarSimpsonFamilyJSON,
  adicionarPersonagem,
  verificarExistenciaArquivo,
  removerPersonagemPorId,
 } = require('./simpsons');
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
    const personagem = await buscarPersonagemPorId(idDesejado);
    console.log(`Personagem: ${personagem.name}`);
  }
  const editar = readline.question('Você deseja editar a lista? (S/N) \n');
  if (editar === 'S' || editar === 's') {
    const existeArquivo = await verificarExistenciaArquivo();
    if (!existeArquivo) {
      const famili = readline.question('Você deseja criar um arquivo com a familia Simpson dos números 1 a 4? (S/N) \n');
      if (famili === 'S' || famili === 's') {
      await criarSimpsonFamilyJSON();
  }
}
  const adicionar = readline.question('Você deseja adicionar um personagem a lista simpsons family? (S/N) \n');
      if (adicionar === 'S' || adicionar === 's') {
        const id = readline.question('Qual o ID do personagem que você deseja adicionar? \n');
        const newPer = await buscarPersonagemPorId(id);
        await adicionarPersonagem(newPer);
    }
  const remover = readline.question('Você deseja remover um personagem da lista simpsons family? (S/N) \n');
      if (remover === 'S' || remover === 's') {
        const id = readline.question('Qual o ID do personagem que você deseja remover? \n');
        const newPer = await buscarPersonagemPorId(id);
        await removerPersonagemPorId(newPer.id);
    }
}
console.log('Obrigado por usar nosso sistema!');
}
main();