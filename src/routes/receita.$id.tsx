import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { recipes, type Recipe } from "@/data/recipes";
import { ArrowLeft, Clock, Users, ChefHat, Heart, Check, Printer } from "lucide-react";

export const Route = createFileRoute("/receita/$id")({
  loader: ({ params }) => {
    const recipe = recipes.find((r) => r.id === params.id);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.recipe.title} — Cozinha da Mãe` },
          { name: "description", content: loaderData.recipe.tagline },
        ]
      : [],
  }),
  errorComponent: ({ error }) => (
    <div className="p-12 text-center">{error.message}</div>
  ),
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-display text-4xl">Receita não encontrada</h1>
      <Link to="/" className="text-primary underline">Voltar ao livro</Link>
    </div>
  ),
  component: RecipePage,
});

function RecipePage() {
  const { recipe } = Route.useLoaderData();
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [doneSteps, setDoneSteps] = useState<Record<number, boolean>>({});

  const progress =
    (Object.values(doneSteps).filter(Boolean).length / recipe.steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${recipe.color}, oklch(0.97 0.03 75))` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-background/40 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:bg-background/70"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao livro
          </Link>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-block rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur">
              {recipe.category}
            </span>
            <h1 className="mt-5 font-display text-6xl font-light leading-[1] text-foreground sm:text-7xl lg:text-8xl">
              {recipe.title}
            </h1>
            <p className="mt-6 max-w-xl font-display text-2xl italic text-foreground/80">
              {recipe.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-2 text-sm backdrop-blur">
                <Clock className="h-4 w-4" /> {recipe.time}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-2 text-sm backdrop-blur">
                <Users className="h-4 w-4" /> {recipe.servings}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-2 text-sm backdrop-blur">
                <ChefHat className="h-4 w-4" /> {recipe.difficulty}
              </span>
            </div>
          </div>
          <div className="hidden text-[16rem] leading-none animate-float lg:block">
            {recipe.emoji}
          </div>
        </div>
      </header>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Heart className="mx-auto h-6 w-6 fill-primary text-primary" />
        <p className="mt-6 font-display text-3xl font-light italic leading-relaxed text-foreground">
          "{recipe.story}"
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-[1fr_1.5fr]">
        {/* Ingredients */}
        <div className="rounded-3xl bg-gradient-card p-8 shadow-soft lg:sticky lg:top-6 lg:self-start">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-3xl">Ingredientes</h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Toque para marcar
            </span>
          </div>
          <ul className="mt-6 space-y-2">
            {recipe.ingredients.map((ing: Recipe["ingredients"][number], i: number) => (
              <li key={i}>
                <button
                  onClick={() => setChecked({ ...checked, [i]: !checked[i] })}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-transparent p-3 text-left transition-all hover:border-border hover:bg-background/50"
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all ${
                      checked[i]
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background"
                    }`}
                  >
                    {checked[i] && <Check className="h-4 w-4" />}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`font-medium transition-all ${
                        checked[i] ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {ing.item}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{ing.quantity}</span>
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => window.print()}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-medium hover:bg-foreground hover:text-background"
          >
            <Printer className="h-4 w-4" /> Imprimir lista
          </button>
        </div>

        {/* Steps */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-3xl">Modo de preparo</h2>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% feito</span>
          </div>
          <div className="mb-8 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-warm transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ol className="space-y-4">
            {recipe.steps.map((step: string, i: number) => {
              const done = doneSteps[i];
              return (
                <li key={i}>
                  <button
                    onClick={() => setDoneSteps({ ...doneSteps, [i]: !done })}
                    className={`group relative w-full overflow-hidden rounded-3xl border p-6 text-left transition-all ${
                      done
                        ? "border-primary/30 bg-primary/5"
                        : "border-border bg-card hover:shadow-soft"
                    }`}
                  >
                    <div className="flex gap-5">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-semibold transition-all ${
                          done
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground group-hover:bg-foreground group-hover:text-background"
                        }`}
                      >
                        {done ? <Check className="h-5 w-5" /> : i + 1}
                      </div>
                      <p
                        className={`flex-1 pt-2 text-base leading-relaxed transition-all ${
                          done ? "text-muted-foreground" : "text-foreground"
                        }`}
                      >
                        {step}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          {progress === 100 && (
            <div className="mt-8 rounded-3xl bg-gradient-warm p-8 text-center text-primary-foreground shadow-warm">
              <div className="text-5xl">🎉</div>
              <p className="mt-3 font-display text-2xl italic">
                Receita finalizada com amor. Sua mãe vai amar!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
