export type WorldCup = {
  year: number;
  host: string;
  hostFlag: string;
  champion: string;
  championFlag: string;
  runnerUp: string;
  runnerUpFlag: string;
  topScorer: string;
  topScorerGoals: number;
  bestPlayer: string;
  finalScore: string;
  teams: number;
  matches: number;
  goals: number;
  trivia: string;
  hero: string; // emoji or symbol
};

export const worldCups: WorldCup[] = [
  { year: 1930, host: "Uruguai", hostFlag: "🇺🇾", champion: "Uruguai", championFlag: "🇺🇾", runnerUp: "Argentina", runnerUpFlag: "🇦🇷", topScorer: "Guillermo Stábile", topScorerGoals: 8, bestPlayer: "José Nasazzi", finalScore: "4–2", teams: 13, matches: 18, goals: 70, trivia: "A primeira Copa do Mundo da história — sem eliminatórias, países convidados pela FIFA.", hero: "🏆" },
  { year: 1934, host: "Itália", hostFlag: "🇮🇹", champion: "Itália", championFlag: "🇮🇹", runnerUp: "Tchecoslováquia", runnerUpFlag: "🇨🇿", topScorer: "Oldřich Nejedlý", topScorerGoals: 5, bestPlayer: "Giuseppe Meazza", finalScore: "2–1", teams: 16, matches: 17, goals: 70, trivia: "Mussolini transformou o torneio em vitrine fascista. Primeira Copa com eliminatórias.", hero: "⚜️" },
  { year: 1938, host: "França", hostFlag: "🇫🇷", champion: "Itália", championFlag: "🇮🇹", runnerUp: "Hungria", runnerUpFlag: "🇭🇺", topScorer: "Leônidas da Silva", topScorerGoals: 7, bestPlayer: "Leônidas da Silva", finalScore: "4–2", teams: 15, matches: 18, goals: 84, trivia: "Leônidas, o 'Diamante Negro', encantou o mundo com a bicicleta. Brasil em 3º.", hero: "💎" },
  { year: 1950, host: "Brasil", hostFlag: "🇧🇷", champion: "Uruguai", championFlag: "🇺🇾", runnerUp: "Brasil", runnerUpFlag: "🇧🇷", topScorer: "Ademir", topScorerGoals: 9, bestPlayer: "Zizinho", finalScore: "2–1", teams: 13, matches: 22, goals: 88, trivia: "O Maracanazo: 200 mil silenciados no Maracanã. A maior tragédia do futebol brasileiro.", hero: "💔" },
  { year: 1954, host: "Suíça", hostFlag: "🇨🇭", champion: "Alemanha Ocidental", championFlag: "🇩🇪", runnerUp: "Hungria", runnerUpFlag: "🇭🇺", topScorer: "Sándor Kocsis", topScorerGoals: 11, bestPlayer: "Ferenc Puskás", finalScore: "3–2", teams: 16, matches: 26, goals: 140, trivia: "O 'Milagre de Berna': Alemanha vira sobre a invencível Hungria de Puskás.", hero: "✨" },
  { year: 1958, host: "Suécia", hostFlag: "🇸🇪", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Suécia", runnerUpFlag: "🇸🇪", topScorer: "Just Fontaine", topScorerGoals: 13, bestPlayer: "Didi", finalScore: "5–2", teams: 16, matches: 35, goals: 126, trivia: "Pelé estreia com 17 anos e marca 6 gols. Recorde de Fontaine: 13 gols numa Copa, jamais batido.", hero: "👑" },
  { year: 1962, host: "Chile", hostFlag: "🇨🇱", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Tchecoslováquia", runnerUpFlag: "🇨🇿", topScorer: "Vários (4 gols)", topScorerGoals: 4, bestPlayer: "Garrincha", finalScore: "3–1", teams: 16, matches: 32, goals: 89, trivia: "Pelé se machuca cedo. Garrincha, o 'Anjo de Pernas Tortas', carrega o Brasil ao bi.", hero: "🦅" },
  { year: 1966, host: "Inglaterra", hostFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", champion: "Inglaterra", championFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", runnerUp: "Alemanha Ocidental", runnerUpFlag: "🇩🇪", topScorer: "Eusébio", topScorerGoals: 9, bestPlayer: "Bobby Charlton", finalScore: "4–2", teams: 16, matches: 32, goals: 89, trivia: "O gol fantasma de Hurst: a bola entrou? Até hoje se discute. Inglesa única conquista.", hero: "👻" },
  { year: 1970, host: "México", hostFlag: "🇲🇽", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Itália", runnerUpFlag: "🇮🇹", topScorer: "Gerd Müller", topScorerGoals: 10, bestPlayer: "Pelé", finalScore: "4–1", teams: 16, matches: 32, goals: 95, trivia: "A seleção mais bonita de todos os tempos. Pelé, Tostão, Gérson, Rivellino, Jairzinho. Tri eterno.", hero: "🌟" },
  { year: 1974, host: "Alemanha Ocidental", hostFlag: "🇩🇪", champion: "Alemanha Ocidental", championFlag: "🇩🇪", runnerUp: "Holanda", runnerUpFlag: "🇳🇱", topScorer: "Grzegorz Lato", topScorerGoals: 7, bestPlayer: "Johan Cruyff", finalScore: "2–1", teams: 16, matches: 38, goals: 97, trivia: "O Carrossel Holandês de Cruyff inventa o 'futebol total' — mas perde a final em casa do rival.", hero: "🎡" },
  { year: 1978, host: "Argentina", hostFlag: "🇦🇷", champion: "Argentina", championFlag: "🇦🇷", runnerUp: "Holanda", runnerUpFlag: "🇳🇱", topScorer: "Mario Kempes", topScorerGoals: 6, bestPlayer: "Mario Kempes", finalScore: "3–1 (pror.)", teams: 16, matches: 38, goals: 102, trivia: "Em plena ditadura militar, Argentina conquista o primeiro título sob suspeitas e papel picado.", hero: "📜" },
  { year: 1982, host: "Espanha", hostFlag: "🇪🇸", champion: "Itália", championFlag: "🇮🇹", runnerUp: "Alemanha Ocidental", runnerUpFlag: "🇩🇪", topScorer: "Paolo Rossi", topScorerGoals: 6, bestPlayer: "Paolo Rossi", finalScore: "3–1", teams: 24, matches: 52, goals: 146, trivia: "A 'Tragédia do Sarriá': o Brasil de Sócrates, Zico e Falcão eliminado por Rossi. Dor eterna.", hero: "🥀" },
  { year: 1986, host: "México", hostFlag: "🇲🇽", champion: "Argentina", championFlag: "🇦🇷", runnerUp: "Alemanha Ocidental", runnerUpFlag: "🇩🇪", topScorer: "Gary Lineker", topScorerGoals: 6, bestPlayer: "Diego Maradona", finalScore: "3–2", teams: 24, matches: 52, goals: 132, trivia: "Maradona faz a 'Mão de Deus' e o Gol do Século no mesmo jogo contra a Inglaterra. Mítico.", hero: "✋" },
  { year: 1990, host: "Itália", hostFlag: "🇮🇹", champion: "Alemanha Ocidental", championFlag: "🇩🇪", runnerUp: "Argentina", runnerUpFlag: "🇦🇷", topScorer: "Salvatore Schillaci", topScorerGoals: 6, bestPlayer: "Salvatore Schillaci", finalScore: "1–0", teams: 24, matches: 52, goals: 115, trivia: "Copa truncada e tática. 'Notti Magiche' marcou a Itália. Última Copa antes da reunificação alemã.", hero: "🌙" },
  { year: 1994, host: "Estados Unidos", hostFlag: "🇺🇸", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Itália", runnerUpFlag: "🇮🇹", topScorer: "Stoichkov / Salenko", topScorerGoals: 6, bestPlayer: "Romário", finalScore: "0–0 (3–2 pen.)", teams: 24, matches: 52, goals: 141, trivia: "Romário e Bebeto. 'É tetra!' Após 24 anos de jejum, Brasil volta ao topo nos pênaltis.", hero: "🍼" },
  { year: 1998, host: "França", hostFlag: "🇫🇷", champion: "França", championFlag: "🇫🇷", runnerUp: "Brasil", runnerUpFlag: "🇧🇷", topScorer: "Davor Šuker", topScorerGoals: 6, bestPlayer: "Ronaldo", finalScore: "3–0", teams: 32, matches: 64, goals: 171, trivia: "Mistério da convulsão de Ronaldo. Zidane decide com dois gols de cabeça. França campeã em casa.", hero: "🪄" },
  { year: 2002, host: "Coreia do Sul / Japão", hostFlag: "🇰🇷🇯🇵", champion: "Brasil", championFlag: "🇧🇷", runnerUp: "Alemanha", runnerUpFlag: "🇩🇪", topScorer: "Ronaldo", topScorerGoals: 8, bestPlayer: "Ronaldo", finalScore: "2–0", teams: 32, matches: 64, goals: 161, trivia: "A redenção do Fenômeno: 8 gols, dois na final. Brasil pentacampeão na primeira Copa asiática.", hero: "🐉" },
  { year: 2006, host: "Alemanha", hostFlag: "🇩🇪", champion: "Itália", championFlag: "🇮🇹", runnerUp: "França", runnerUpFlag: "🇫🇷", topScorer: "Miroslav Klose", topScorerGoals: 5, bestPlayer: "Zinedine Zidane", finalScore: "1–1 (5–3 pen.)", teams: 32, matches: 64, goals: 147, trivia: "A cabeçada de Zidane em Materazzi na despedida. Itália tetra nos pênaltis. Drama puro.", hero: "💥" },
  { year: 2010, host: "África do Sul", hostFlag: "🇿🇦", champion: "Espanha", championFlag: "🇪🇸", runnerUp: "Holanda", runnerUpFlag: "🇳🇱", topScorer: "Vários (5 gols)", topScorerGoals: 5, bestPlayer: "Diego Forlán", finalScore: "1–0 (pror.)", teams: 32, matches: 64, goals: 145, trivia: "O 'tiki-taka' espanhol em seu auge. Iniesta marca na prorrogação. Vuvuzelas eternas.", hero: "📯" },
  { year: 2014, host: "Brasil", hostFlag: "🇧🇷", champion: "Alemanha", championFlag: "🇩🇪", runnerUp: "Argentina", runnerUpFlag: "🇦🇷", topScorer: "James Rodríguez", topScorerGoals: 6, bestPlayer: "Lionel Messi", finalScore: "1–0 (pror.)", teams: 32, matches: 64, goals: 171, trivia: "O 7 a 1. A vergonha do Mineirão. Götze decide para a Alemanha tetra no Maracanã.", hero: "😱" },
  { year: 2018, host: "Rússia", hostFlag: "🇷🇺", champion: "França", championFlag: "🇫🇷", runnerUp: "Croácia", runnerUpFlag: "🇭🇷", topScorer: "Harry Kane", topScorerGoals: 6, bestPlayer: "Luka Modrić", finalScore: "4–2", teams: 32, matches: 64, goals: 169, trivia: "Mbappé, 19 anos, marca na final como Pelé. França bicampeã. Croácia heroica vice.", hero: "🚀" },
  { year: 2022, host: "Catar", hostFlag: "🇶🇦", champion: "Argentina", championFlag: "🇦🇷", runnerUp: "França", runnerUpFlag: "🇫🇷", topScorer: "Kylian Mbappé", topScorerGoals: 8, bestPlayer: "Lionel Messi", finalScore: "3–3 (4–2 pen.)", teams: 32, matches: 64, goals: 172, trivia: "A consagração de Messi. Hat-trick de Mbappé. A maior final da história. Argentina tricampeã.", hero: "🐐" },
];

export const champions = [
  { country: "Brasil", flag: "🇧🇷", titles: 5, years: [1958, 1962, 1970, 1994, 2002] },
  { country: "Alemanha", flag: "🇩🇪", titles: 4, years: [1954, 1974, 1990, 2014] },
  { country: "Itália", flag: "🇮🇹", titles: 4, years: [1934, 1938, 1982, 2006] },
  { country: "Argentina", flag: "🇦🇷", titles: 3, years: [1978, 1986, 2022] },
  { country: "França", flag: "🇫🇷", titles: 2, years: [1998, 2018] },
  { country: "Uruguai", flag: "🇺🇾", titles: 2, years: [1930, 1950] },
  { country: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", titles: 1, years: [1966] },
  { country: "Espanha", flag: "🇪🇸", titles: 1, years: [2010] },
];

export const topScorersAllTime = [
  { name: "Miroslav Klose", country: "🇩🇪", goals: 16 },
  { name: "Ronaldo", country: "🇧🇷", goals: 15 },
  { name: "Gerd Müller", country: "🇩🇪", goals: 14 },
  { name: "Just Fontaine", country: "🇫🇷", goals: 13 },
  { name: "Lionel Messi", country: "🇦🇷", goals: 13 },
  { name: "Pelé", country: "🇧🇷", goals: 12 },
  { name: "Kylian Mbappé", country: "🇫🇷", goals: 12 },
  { name: "Sándor Kocsis", country: "🇭🇺", goals: 11 },
];
