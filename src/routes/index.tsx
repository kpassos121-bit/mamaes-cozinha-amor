import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { MessageWall } from "@/components/MessageWall";
import { CommunityRecipes } from "@/components/CommunityRecipes";
import { Heart, Sparkles, BookHeart, Flower2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Receitas com Amor — Livro de Receitas para o Dia das Mães" },
      { name: "description", content: "Um livro de receitas interativo e moderno para celebrar as mães. Bolos, doces, pratos e bebidas feitos com carinho." },
      { property: "og:title", content: "Receitas com Amor — Dia das Mães" },
      { property: "og:description", content: "Receitas afetivas para celebrar a mulher mais especial da sua vida." },
    ],
  }),
  component: Index,
});

const categories = ["Tudo", "Doce", "Salgado", "Bebida", "Café da manhã"] as const;

function Index() {
  const [active, setActive] = useState<(typeof categories)[number]>("Tudo");

  const filtered = useMemo(
    () => (active === "Tudo" ? recipes : recipes.filter((r) => r.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div
          className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-50 blur-3xl animate-float"
          style={{ background: "var(--rose)" }}
        />
        <div
          className="absolute -right-20 bottom-0 h-80 w-80 rounded-full opacity-40 blur-3xl animate-float"
          style={{ background: "var(--gold)", animationDelay: "2s" }}
        />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
              <BookHeart className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-semibold">Cozinha da Mãe</span>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-foreground/80 sm:flex">
            <a href="#receitas" className="hover:text-foreground">Receitas</a>
            <a href="#carta" className="hover:text-foreground">A carta</a>
            <span className="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-background">
              <Heart className="h-3.5 w-3.5 fill-current" /> Dia das Mães
            </span>
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" /> Edição Especial • 2026
              </span>
              <h1 className="mt-6 font-display text-6xl font-light leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
                Receitas <em className="italic text-gradient-warm">com</em>
                <br />
                amor de mãe.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
                Um livro vivo, feito de memórias, cheiros de cozinha e abraços apertados. Cada receita aqui é uma carta de amor às mulheres que nos ensinaram que comida é cuidado.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#receitas"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background shadow-warm transition-all hover:scale-105"
                >
                  Explorar receitas
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#carta"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-4 text-sm font-medium text-foreground transition-all hover:bg-foreground/5"
                >
                  Ler a dedicatória
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8">
                {[
                  { n: "06", l: "Receitas" },
                  { n: "∞", l: "Memórias" },
                  { n: "01", l: "Mãe especial" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-4xl font-semibold text-foreground">{s.n}</div>
                    <div className="text-xs uppercase tracking-wider text-foreground/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] w-full">
                <div className="absolute inset-0 rotate-6 rounded-[3rem] bg-gradient-warm shadow-warm" />
                <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-[3rem] bg-card p-10 shadow-soft">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <Flower2 className="h-10 w-10 text-primary" />
                      <p className="mt-6 font-display text-4xl italic leading-tight text-foreground">
                        "Mãe é a primeira casa que a gente conhece."
                      </p>
                    </div>
                    <div className="space-y-4">
                      {recipes.slice(0, 3).map((r) => (
                        <div key={r.id} className="flex items-center gap-4 rounded-2xl bg-muted/60 p-3">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                            style={{ background: `color-mix(in oklab, ${r.color} 30%, white)` }}
                          >
                            {r.emoji}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold">{r.title}</div>
                            <div className="text-xs text-muted-foreground">{r.time} • {r.difficulty}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Recipes */}
      <section id="receitas" className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary">O cardápio</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-tight sm:text-6xl">
              Cada prato, <em className="italic text-gradient-warm">uma história</em>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  active === c
                    ? "border-foreground bg-foreground text-background shadow-soft"
                    : "border-border bg-card text-foreground hover:border-foreground/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <RecipeCard key={r.id} recipe={r} index={i} />
          ))}
        </div>
      </section>

      <MessageWall />
      <CommunityRecipes />

      {/* Letter */}
      <section id="carta" className="relative overflow-hidden bg-foreground py-32 text-background">
        <div
          className="absolute -left-20 top-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute -right-20 bottom-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--primary)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Heart className="mx-auto h-10 w-10 fill-current text-primary" />
          <h2 className="mt-8 font-display text-5xl font-light italic leading-tight sm:text-6xl">
            Para você, mãe.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-background/80">
            Obrigado pelos almoços de domingo, pelos lanches da tarde, pelo café passado na hora e pelos doces escondidos na lata. Obrigado por temperar tudo com amor — até as receitas mais simples viraram inesquecíveis nas suas mãos.
          </p>
          <p className="mt-6 font-display text-2xl italic text-background/90">
            Este livro é nosso jeito de devolver, em receitas, um pouquinho do que você sempre serviu: cuidado.
          </p>
          <p className="mt-10 text-sm uppercase tracking-[0.3em] text-background/60">
            Com todo amor • Feliz Dia das Mães
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10 text-center text-sm text-muted-foreground">
        Feito com <Heart className="inline h-3.5 w-3.5 fill-primary text-primary" /> para a mulher mais especial do mundo.
      </footer>
    </div>
  );
}
