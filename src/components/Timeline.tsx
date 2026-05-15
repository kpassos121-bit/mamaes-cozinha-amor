import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { worldCups, type WorldCup } from "@/data/worldcups";
import { X, Trophy, Goal, Star, Users, Calendar, Sparkles } from "lucide-react";
import { Reveal } from "./visual";

export function Timeline() {
  const [active, setActive] = useState<WorldCup | null>(null);

  return (
    <section id="historia" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-20 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
              1930 — 2022
            </span>
            <h2 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">
              A linha do <span className="text-gradient-gold">tempo</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              22 edições. 9 décadas. Centenas de heróis. Toque em uma Copa para reviver sua história.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* central line */}
          <div
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent md:left-1/2"
            style={{ opacity: 0.4 }}
          />

          <div className="space-y-12">
            {worldCups.map((wc, i) => (
              <TimelineCard key={wc.year} wc={wc} index={i} onOpen={() => setActive(wc)} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && <CupModal wc={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function TimelineCard({
  wc,
  index,
  onOpen,
}: {
  wc: WorldCup;
  index: number;
  onOpen: () => void;
}) {
  const isLeft = index % 2 === 0;
  return (
    <Reveal delay={0.05} y={40}>
      <div
        className={`relative grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-2 md:gap-12 ${
          isLeft ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        {/* dot */}
        <div className="pointer-events-none absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
          <div className="relative">
            <div className="h-4 w-4 rounded-full bg-[var(--gold)] shadow-[0_0_20px_var(--gold)]" />
            <div className="absolute inset-0 animate-ping rounded-full bg-[var(--gold)] opacity-50" />
          </div>
        </div>

        <div className={`hidden md:block ${isLeft ? "text-right" : "text-left"}`}>
          <div className="font-display text-7xl text-gradient-gold leading-none">{wc.year}</div>
          <div className="mt-2 text-xl text-foreground/80">
            {wc.hostFlag} {wc.host}
          </div>
        </div>

        <button
          onClick={onOpen}
          className="group glass relative col-start-2 overflow-hidden rounded-2xl p-6 text-left transition-all hover:scale-[1.02] hover:shadow-glow md:col-start-auto"
        >
          <div className="md:hidden">
            <div className="font-display text-4xl text-gradient-gold">{wc.year}</div>
            <div className="text-sm text-foreground/80">
              {wc.hostFlag} {wc.host}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 md:mt-0">
            <div className="text-4xl">{wc.hero}</div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-widest text-[var(--gold)]">Campeão</div>
              <div className="font-display text-2xl text-foreground">
                {wc.championFlag} {wc.champion}
              </div>
            </div>
          </div>

          <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {wc.trivia}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/70">
            <span className="flex items-center gap-1">
              <Goal className="h-3 w-3" /> {wc.topScorer} ({wc.topScorerGoals})
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" /> {wc.bestPlayer}
            </span>
          </div>

          <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100">
            Ver detalhes →
          </div>

          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--gold)] opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
        </button>
      </div>
    </Reveal>
  );
}

function CupModal({ wc, onClose }: { wc: WorldCup; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="glass-gold relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-8 shadow-pitch"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-black/30 p-2 text-foreground transition-colors hover:bg-black/60"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="text-7xl">{wc.hero}</div>
          <div className="mt-2 font-display text-7xl text-gradient-gold">{wc.year}</div>
          <div className="text-xl text-foreground">
            {wc.hostFlag} {wc.host}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Stat icon={<Trophy className="h-4 w-4" />} label="Campeão" value={`${wc.championFlag} ${wc.champion}`} highlight />
          <Stat icon={<Trophy className="h-4 w-4 opacity-60" />} label="Vice-campeão" value={`${wc.runnerUpFlag} ${wc.runnerUp}`} />
          <Stat icon={<Goal className="h-4 w-4" />} label="Final" value={wc.finalScore} />
          <Stat icon={<Star className="h-4 w-4" />} label="Melhor jogador" value={wc.bestPlayer} />
          <Stat icon={<Goal className="h-4 w-4" />} label="Artilheiro" value={`${wc.topScorer} (${wc.topScorerGoals})`} />
          <Stat icon={<Users className="h-4 w-4" />} label="Seleções" value={String(wc.teams)} />
          <Stat icon={<Calendar className="h-4 w-4" />} label="Partidas" value={String(wc.matches)} />
          <Stat icon={<Goal className="h-4 w-4" />} label="Gols" value={String(wc.goals)} />
        </div>

        <div className="mt-6 rounded-2xl border border-[var(--gold)]/30 bg-black/20 p-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--gold)]">
            <Sparkles className="h-3 w-3" /> Curiosidade marcante
          </div>
          <p className="mt-2 font-serif text-lg italic leading-relaxed text-foreground">
            "{wc.trivia}"
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Stat({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? "border-[var(--gold)]/40 bg-[var(--gold)]/10"
          : "border-white/10 bg-black/20"
      }`}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-1 font-display text-xl text-foreground">{value}</div>
    </div>
  );
}
