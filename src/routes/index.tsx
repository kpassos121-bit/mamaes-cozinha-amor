import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Trophy, Globe, Flame } from "lucide-react";
import { Particles, Reveal } from "@/components/visual";
import { Timeline } from "@/components/Timeline";
import { Legends, Moments } from "@/components/LegendsAndMoments";
import { Stats } from "@/components/Stats";
import { Quiz } from "@/components/Quiz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A História da Copa do Mundo — Documentário Interativo" },
      {
        name: "description",
        content:
          "Uma jornada cinematográfica pelos maiores momentos da Copa do Mundo FIFA, de 1930 a 2022. Lendas, estatísticas e memórias eternas.",
      },
      { property: "og:title", content: "A História da Copa do Mundo" },
      {
        property: "og:description",
        content: "De Uruguai 1930 a Catar 2022 — todas as Copas, lendas e momentos inesquecíveis.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Timeline />
      <Legends />
      <Moments />
      <Stats />
      <Quiz />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <header className="relative isolate min-h-screen overflow-hidden bg-gradient-hero">
      <div className="pitch-lines absolute inset-0 opacity-30" />
      <Particles count={50} />

      {/* glowing orbs */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, var(--pitch) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl animate-float-slow"
        style={{
          background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold shadow-glow">
            <Trophy className="h-5 w-5 text-[var(--ink)]" />
          </div>
          <div>
            <div className="font-display text-xl tracking-widest text-foreground">FIFA WORLD CUP</div>
            <div className="-mt-1 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
              1930 — 2022
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-widest text-foreground/70 md:flex">
          <a href="#historia" className="transition-colors hover:text-[var(--gold)]">Linha do tempo</a>
          <a href="#lendas" className="transition-colors hover:text-[var(--gold)]">Lendas</a>
          <a href="#momentos" className="transition-colors hover:text-[var(--gold)]">Momentos</a>
          <a href="#estatisticas" className="transition-colors hover:text-[var(--gold)]">Stats</a>
          <a href="#quiz" className="transition-colors hover:text-[var(--gold)]">Quiz</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl flex-col items-center justify-center px-6 pb-20 text-center">
        <Reveal y={20}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-black/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)] backdrop-blur">
            <Flame className="h-3 w-3" /> Documentário Interativo
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 font-display text-7xl leading-[0.9] text-foreground text-shadow-glow sm:text-8xl md:text-[10rem] lg:text-[12rem]">
            A HISTÓRIA<br />
            <span className="text-gradient-gold">DA COPA</span>
          </h1>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/80 sm:text-2xl">
            Uma jornada pelos maiores momentos do futebol mundial — de Uruguai 1930 à coroação de Messi no Catar.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#historia"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-[var(--ink)] shadow-glow transition-transform hover:scale-105"
            >
              <Globe className="h-4 w-4" />
              Explorar História
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#quiz"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-black/20 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:border-[var(--gold)]/60"
            >
              Fazer o Quiz
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-20 grid grid-cols-3 gap-10 sm:gap-20">
            {[
              { n: "22", l: "Edições" },
              { n: "08", l: "Campeões" },
              { n: "∞", l: "Memórias" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-5xl text-gradient-gold sm:text-6xl">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 text-foreground/50"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold shadow-glow">
          <Trophy className="h-5 w-5 text-[var(--ink)]" />
        </div>
        <p className="mt-4 font-serif text-lg italic text-foreground/80">
          "O futebol é a coisa mais importante entre as coisas menos importantes da vida."
        </p>
        <p className="mt-2 text-sm text-muted-foreground">— Arrigo Sacchi</p>
        <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[var(--gold)]/70">
          Feito com paixão pelo futebol mundial
        </p>
      </div>
    </footer>
  );
}
