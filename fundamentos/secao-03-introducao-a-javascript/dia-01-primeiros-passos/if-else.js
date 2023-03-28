let notaCandidato = 87;

if (notaCandidato >= 80) {
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (notaCandidato < 80 && notaCandidato >= 60) {
  console.log("Você está na nossa lista de espera.");
} else if (notaCandidato < 60) {
  console.log("Infelizmente, você reprovou.");
}