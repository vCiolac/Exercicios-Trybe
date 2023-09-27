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

    return personagemEncontrado.name;
  } catch (error) {
    throw error;
  }
}

module.exports = { 
  imprimirPersonagens,
  buscarPersonagemPorId,
};