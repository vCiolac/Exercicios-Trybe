
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

//Exemplo: "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const { name, age, nationality } = user;
const { profession, squad, squadInitials } = jobInfos;

console.log(`Oi, meu nome é ${name}, Eu tenho ${age} anos e sou ${nationality}. Eu trabalho como ${profession} e minha equipe é ${squadInitials}-${squad}`)