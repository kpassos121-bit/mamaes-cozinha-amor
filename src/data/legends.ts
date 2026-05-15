export type Legend = {
  name: string;
  nickname: string;
  country: string;
  flag: string;
  worldCupGoals: number;
  worldCupTitles: number;
  era: string;
  trivia: string;
  initials: string;
  hue: number;
};

export const legends: Legend[] = [
  { name: "Pelé", nickname: "O Rei", country: "Brasil", flag: "🇧🇷", worldCupGoals: 12, worldCupTitles: 3, era: "1958–1970", trivia: "Único jogador tricampeão mundial. Estreou aos 17 anos marcando na final.", initials: "PE", hue: 50 },
  { name: "Diego Maradona", nickname: "El Pibe de Oro", country: "Argentina", flag: "🇦🇷", worldCupGoals: 8, worldCupTitles: 1, era: "1982–1994", trivia: "Carregou a Argentina sozinho em 86. Mão de Deus + Gol do Século no mesmo jogo.", initials: "DM", hue: 200 },
  { name: "Zinedine Zidane", nickname: "Zizou", country: "França", flag: "🇫🇷", worldCupGoals: 5, worldCupTitles: 1, era: "1998–2006", trivia: "Dois gols de cabeça na final de 98. Cabeçada e expulsão na despedida em 2006.", initials: "ZZ", hue: 230 },
  { name: "Ronaldo", nickname: "O Fenômeno", country: "Brasil", flag: "🇧🇷", worldCupGoals: 15, worldCupTitles: 2, era: "1994–2006", trivia: "Após o trauma de 98, voltou para marcar 8 gols em 2002 e silenciar críticos.", initials: "R9", hue: 110 },
  { name: "Lionel Messi", nickname: "La Pulga", country: "Argentina", flag: "🇦🇷", worldCupGoals: 13, worldCupTitles: 1, era: "2006–presente", trivia: "Bola de Ouro em 2014 e 2022. Conquistou a Copa que faltava em sua coroação no Catar.", initials: "M10", hue: 195 },
  { name: "Cristiano Ronaldo", nickname: "CR7", country: "Portugal", flag: "🇵🇹", worldCupGoals: 8, worldCupTitles: 0, era: "2006–presente", trivia: "Único jogador a marcar em 5 Copas diferentes. Hat-trick contra a Espanha em 2018.", initials: "CR", hue: 0 },
  { name: "Kylian Mbappé", nickname: "Donatello", country: "França", flag: "🇫🇷", worldCupGoals: 12, worldCupTitles: 1, era: "2018–presente", trivia: "Aos 19 anos, marcou na final de 2018. Hat-trick na final de 2022. Já é lenda.", initials: "KM", hue: 250 },
  { name: "Franz Beckenbauer", nickname: "Der Kaiser", country: "Alemanha", flag: "🇩🇪", worldCupGoals: 5, worldCupTitles: 1, era: "1966–1974", trivia: "Único campeão como capitão (74) e técnico (90). Inventou o líbero moderno.", initials: "FB", hue: 30 },
];
