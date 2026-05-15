import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./visual";
import { Sparkles, RefreshCw } from "lucide-react";

type Answer = "tecnico" | "magico" | "guerreiro" | "artilheiro";

const questions: { q: string; options: { label: string; type: Answer }[] }[] = [
  {
    q: "Qual a sua jogada favorita?",
    options: [
      { label: "Um drible curto e mágico no meio de cinco", type: "magico" },
      { label: "Um chutaço de fora da área", type: "artilheiro" },
      { label: "Uma roubada de bola e contra-ataque", type: "guerreiro" },
      { label: "Um passe milimétrico que ninguém viu", type: "tecnico" },
    ],
  },
  {
    q: "Como você reage após sofrer uma falta dura?",
    options: [
      { label: "Levanto e provo no próximo lance", type: "guerreiro" },
      { label: "Faço o gol e festejo na cara", type: "magico" },
      { label: "Continuo jogando, sem perder o ritmo", type: "tecnico" },
      { label: "Cobro a falta e marco direto", type: "artilheiro" },
    ],
  },
  {
    q: "Em que minuto você decide o jogo?",
    options: [
      { label: "Aos 5 minutos. Pra quê esperar?", type: "artilheiro" },
      { label: "No último lance, na prorrogação", type: "magico" },
      { label: "Em todos. Sou consistência pura", type: "tecnico" },
      { label: "Quando o time mais precisar", type: "guerreiro" },
    ],
  },
  {
    q: "Qual número você quer nas costas?",
    options: [
      { label: "10 — clássico de craque", type: "magico" },
      { label: "9 — feito pra fazer gol", type: "artilheiro" },
      { label: "5 — coração do meio-campo", type: "tecnico" },
      { label: "8 — corro o jogo inteiro", type: "guerreiro" },
    ],
  },
];

const results: Record<
  Answer,
  { name: string; player: string; flag: string; description: string; emoji: string }
> = {
  magico: {
    name: "O Mágico",
    player: "Diego Maradona",
    flag: "🇦🇷",
    emoji: "🪄",
    description:
      "Você é arte e instinto. Faz o impossível parecer fácil. Carrega o time nos ombros nos momentos decisivos — e ama o palco grande.",
  },
  artilheiro: {
    name: "O Artilheiro",
    player: "Ronaldo Fenômeno",
    flag: "🇧🇷",
    emoji: "⚡",
    description:
      "Sua função é simples: gols. Você vive da finalização, e quando a chance aparece, ninguém é mais letal. Predador puro.",
  },
  tecnico: {
    name: "O Maestro",
    player: "Zinedine Zidane",
    flag: "🇫🇷",
    emoji: "🎼",
    description:
      "Você joga com tempo. Vê passes que ninguém vê, controla o ritmo e dita a melodia da partida. Elegância em forma de futebol.",
  },
  guerreiro: {
    name: "O Guerreiro",
    player: "Lionel Messi (modo 2022)",
    flag: "🇦🇷",
    emoji: "🛡️",
    description:
      "Coração, raça e liderança. Você corre os 90 minutos, joga machucado e nunca abandona o time. Vence pela teimosia épica.",
  },
};

export function Quiz() {
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState<Record<Answer, number>>({
    tecnico: 0,
    magico: 0,
    guerreiro: 0,
    artilheiro: 0,
  });
  const [done, setDone] = useState(false);

  const winner = (Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0] || "magico") as Answer;
  const result = results[winner];

  function pick(t: Answer) {
    const next = { ...tally, [t]: tally[t] + 1 };
    setTally(next);
    if (step + 1 >= questions.length) setDone(true);
    else setStep(step + 1);
  }

  function reset() {
    setStep(0);
    setTally({ tecnico: 0, magico: 0, guerreiro: 0, artilheiro: 0 });
    setDone(false);
  }

  return (
    <section id="quiz" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
              Interativo
            </span>
            <h2 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">
              Qual lenda <span className="text-gradient-gold">você seria?</span>
            </h2>
          </div>
        </Reveal>

        <div className="glass-gold relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="bg-gradient-gold transition-all"
                      style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                    {step + 1}/{questions.length}
                  </span>
                </div>

                <h3 className="font-display text-3xl text-foreground sm:text-4xl">
                  {questions[step].q}
                </h3>

                <div className="mt-8 space-y-3">
                  {questions[step].options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => pick(o.type)}
                      className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 text-left text-foreground transition-all hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10"
                    >
                      <span>{o.label}</span>
                      <span className="text-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 20 }}
                className="text-center"
              >
                <div className="text-7xl">{result.emoji}</div>
                <div className="mt-3 text-sm uppercase tracking-[0.4em] text-[var(--gold)]">
                  Você é
                </div>
                <h3 className="mt-2 font-display text-6xl text-gradient-gold">{result.name}</h3>
                <div className="mt-3 font-serif text-xl italic text-foreground">
                  Seu espírito: {result.flag} {result.player}
                </div>
                <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {result.description}
                </p>
                <button
                  onClick={reset}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-glow transition-transform hover:scale-105"
                >
                  <RefreshCw className="h-4 w-4" /> Refazer o teste
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <Sparkles className="pointer-events-none absolute right-6 top-6 h-5 w-5 text-[var(--gold)]/40" />
        </div>
      </div>
    </section>
  );
}
