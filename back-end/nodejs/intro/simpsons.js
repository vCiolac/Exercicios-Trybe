const fs = require('fs').promises;

async function imprimirPersonagens() {
  try {
    const data = await fs.readFile('simpsons.json', 'utf8');
    const personagens = JSON.parse(data);

    personagens.forEach((personagem) => {
      console.log(`${personagem.id} - ${personagem.name}`);
    });
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
  }
}

async function buscarPersonagemPorId(id) {
  try {
    const data = await fs.readFile('simpsons.json', 'utf8');
    const personagens = JSON.parse(data);

    const personagemEncontrado = personagens.find((personagem) => personagem.id === id);

    if (!personagemEncontrado) {
      throw new Error('id não encontrado');
    }

    return personagemEncontrado;
  } catch (error) {
    throw error;
  }
}

async function criarSimpsonFamilyJSON() {
  try {
    const data = await fs.readFile('simpsons.json', 'utf8');
    const personagens = JSON.parse(data);

    const simpsonFamily = personagens.filter((personagem) => {
      const id = parseInt(personagem.id);
      return id >= 1 && id <= 4;
    });

    await fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFamily, null, 2), 'utf8');

    console.log('Arquivo simpsonFamily.json criado com sucesso.');
  } catch (error) {
    console.error('Erro ao criar o arquivo simpsonFamily.json:', error);
  }
}

async function adicionarPersonagem(personagem) {
  try {
    const data = await fs.readFile('simpsonFamily.json', 'utf8');
    const simpsonFamily = JSON.parse(data);

    const personagemExistente = simpsonFamily.find((p) => p.id === personagem.id);
    if (personagemExistente) {
      console.log('Este personagem já está na lista simpsonFamily.');
      return;
    }

    simpsonFamily.push(personagem);
    await fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFamily, null, 2), 'utf8');

    console.log(`Personagem ${personagem.name} adicionado com sucesso à lista simpsonFamily.`);
  } catch (error) {
    console.error('Erro ao adicionar o personagem:', error);
  }
}

async function verificarExistenciaArquivo() {
  try {
    await fs.access('simpsonFamily.json');
    return true;
  } catch (error) {
    return false; 
  }
}

async function removerPersonagemPorId(id) {
  try {
    const data = await fs.readFile('simpsonFamily.json', 'utf8');
    const simpsonFamily = JSON.parse(data);

    const indice = simpsonFamily.findIndex((personagem) => personagem.id === id);

    if (indice === -1) {
      console.log('Personagem com o ID especificado não encontrado na lista simpsonFamily.');
      return;
    }

    simpsonFamily.splice(indice, 1);

    await fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFamily, null, 2), 'utf8');

    console.log(`Personagem com ID ${id} removido com sucesso da lista simpsonFamily.`);
  } catch (error) {
    console.error('Erro ao remover o personagem:', error);
  }
}

module.exports = { 
  imprimirPersonagens,
  buscarPersonagemPorId,
  criarSimpsonFamilyJSON,
  adicionarPersonagem,
  verificarExistenciaArquivo,
  removerPersonagemPorId,
};