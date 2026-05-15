export type Moment = {
  title: string;
  year: number;
  match: string;
  description: string;
  emoji: string;
  hue: number;
};

export const moments: Moment[] = [
  { title: "A Mão de Deus", year: 1986, match: "Argentina 2 × 1 Inglaterra", description: "Maradona marca de mão e quatro minutos depois faz o Gol do Século driblando meio time inglês. O futebol em sua dualidade mais perfeita.", emoji: "✋", hue: 195 },
  { title: "O 7 × 1", year: 2014, match: "Brasil 1 × 7 Alemanha", description: "Em casa, sem Neymar e sem Thiago Silva, o Brasil sofre a humilhação mais dolorosa da história. 5 gols em 18 minutos. O Mineirão silenciado.", emoji: "💔", hue: 0 },
  { title: "Bicicleta de Richarlison", year: 2022, match: "Brasil 2 × 0 Sérvia", description: "O Pombo dominou no peito, girou e mandou uma bicicleta perfeita. Eleito o gol mais bonito da Copa do Catar.", emoji: "🚴", hue: 110 },
  { title: "A defesa de Banks", year: 1970, match: "Inglaterra 0 × 1 Brasil", description: "Pelé já gritava 'gol' quando Gordon Banks se esticou impossivelmente para tirar a cabeçada. A defesa do século.", emoji: "🧤", hue: 240 },
  { title: "A coroação de Messi", year: 2022, match: "Argentina 3 × 3 França (4–2 pen.)", description: "Após 36 anos, Argentina campeã. Messi ergue a taça que faltava. A maior final de todos os tempos. O fim de uma jornada épica.", emoji: "🏆", hue: 50 },
  { title: "Maracanazo", year: 1950, match: "Brasil 1 × 2 Uruguai", description: "200 mil pessoas mudas no Maracanã. Ghiggia silenciou um país inteiro. A maior tragédia esportiva do Brasil.", emoji: "🤐", hue: 350 },
];
