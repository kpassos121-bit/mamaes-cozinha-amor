import { useEffect, useState } from "react";
import { Globe2, RefreshCw, ExternalLink } from "lucide-react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
  strYoutube?: string;
};

const ENDPOINT = "https://www.themealdb.com/api/json/v1/1/random.php";

async function fetchMeals(count: number): Promise<Meal[]> {
  const reqs = Array.from({ length: count }, () => fetch(ENDPOINT).then((r) => r.json()));
  const results = await Promise.all(reqs);
  const seen = new Set<string>();
  return results
    .map((r) => r.meals?.[0] as Meal | undefined)
    .filter((m): m is Meal => {
      if (!m) return false;
      if (seen.has(m.idMeal)) return false;
      seen.add(m.idMeal);
      return true;
    });
}

export function WorldRecipes() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      setMeals(await fetchMeals(6));
    } catch (e) {
      console.error(e);
      setError("Não foi possível carregar receitas agora.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="mundo" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Inspirações do mundo
          </span>
          <h2 className="mt-3 font-display text-5xl font-light leading-tight sm:text-6xl">
            Receitas <em className="italic text-gradient-warm">de todo canto</em>.
          </h2>
          <p className="mt-4 max-w-xl text-foreground/70">
            Sugestões frescas vindas direto do TheMealDB para inspirar o almoço de domingo.
          </p>
        </div>
        <button
          onClick={load}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5 disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Sortear novas
        </button>
      </div>

      {error && <p className="mt-8 text-sm text-destructive">{error}</p>}

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading && meals.length === 0 &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] animate-pulse rounded-3xl bg-muted" />
          ))}

        {meals.map((m) => (
          <article
            key={m.idMeal}
            className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-warm"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={m.strMealThumb}
                alt={m.strMeal}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                <Globe2 className="h-3 w-3" /> {m.strArea}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {m.strCategory}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">
                {m.strMeal}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm text-foreground/70">
                {m.strInstructions}
              </p>
              {m.strYoutube && (
                <a
                  href={m.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Ver vídeo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
