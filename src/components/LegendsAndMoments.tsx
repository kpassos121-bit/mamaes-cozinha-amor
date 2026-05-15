import { motion } from "framer-motion";
import { legends } from "@/data/legends";
import { moments } from "@/data/moments";
import { Reveal } from "./visual";

export function Legends() {
  return (
    <section id="lendas" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
              Hall da fama
            </span>
            <h2 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">
              Lendas <span className="text-gradient-gold">eternas</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Os homens que transformaram a Copa do Mundo em mitologia moderna.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {legends.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", damping: 20 }}
                className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-glow"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                  style={{ background: `oklch(0.7 0.2 ${l.hue})` }}
                />

                <div
                  className="relative flex h-32 w-32 items-center justify-center rounded-2xl font-display text-5xl text-foreground"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.55 0.18 ${l.hue}), oklch(0.25 0.08 ${l.hue}))`,
                    boxShadow: `0 20px 40px -10px oklch(0.5 0.18 ${l.hue} / 0.5)`,
                  }}
                >
                  {l.initials}
                  <span className="absolute -right-2 -top-2 text-3xl">{l.flag}</span>
                </div>

                <div className="relative mt-5">
                  <div className="font-display text-3xl text-foreground">{l.name}</div>
                  <div className="font-serif text-sm italic text-[var(--gold)]">"{l.nickname}"</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {l.country} • {l.era}
                  </div>
                </div>

                <div className="relative mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-black/30 p-2 text-center">
                    <div className="font-display text-2xl text-[var(--gold)]">{l.worldCupGoals}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Gols em Copas
                    </div>
                  </div>
                  <div className="rounded-lg bg-black/30 p-2 text-center">
                    <div className="font-display text-2xl text-[var(--gold)]">
                      {l.worldCupTitles}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Mundiais
                    </div>
                  </div>
                </div>

                <p className="relative mt-3 text-xs leading-relaxed text-muted-foreground">
                  {l.trivia}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Moments() {
  return (
    <section id="momentos" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
              Cinema puro
            </span>
            <h2 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">
              Momentos <span className="text-gradient-gold">inesquecíveis</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {moments.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08} y={50}>
              <motion.article
                whileHover={{ scale: 1.015 }}
                className="group relative h-full overflow-hidden rounded-3xl p-8 shadow-pitch"
                style={{
                  background: `linear-gradient(135deg, oklch(0.25 0.1 ${m.hue}) 0%, oklch(0.12 0.04 160) 70%)`,
                }}
              >
                <div className="pitch-lines absolute inset-0 opacity-40" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-sm uppercase tracking-[0.3em] text-[var(--gold)]">
                      {m.year} • {m.match}
                    </div>
                    <h3 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
                      {m.title}
                    </h3>
                  </div>
                  <div className="text-6xl drop-shadow-2xl">{m.emoji}</div>
                </div>

                <p className="relative mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-foreground/90">
                  {m.description}
                </p>

                <div
                  className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
                  style={{ background: `oklch(0.7 0.2 ${m.hue})` }}
                />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
