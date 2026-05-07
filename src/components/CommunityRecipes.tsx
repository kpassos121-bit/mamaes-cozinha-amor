import { useEffect, useState, type FormEvent } from "react";
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { Plus, ChefHat, Sparkles } from "lucide-react";

type CommunityRecipe = {
  id: string;
  title: string;
  author: string;
  story: string;
  ingredients: string;
  steps: string;
  createdAt?: { toMillis: () => number } | null;
};

export function CommunityRecipes() {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState<CommunityRecipe[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", author: "", story: "", ingredients: "", steps: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "communityRecipes"), orderBy("createdAt", "desc"), limit(24));
    const unsub = onSnapshot(
      q,
      (snap) => setRecipes(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<CommunityRecipe, "id">) }))),
      (err) => {
        console.error("Community recipes error:", err);
        setError("Não foi possível carregar as receitas da comunidade.");
      },
    );
    return unsub;
  }, []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSending(true);
    setError(null);
    try {
      await addDoc(collection(db, "communityRecipes"), {
        title: form.title.trim().slice(0, 100),
        author: form.author.trim().slice(0, 60),
        story: form.story.trim().slice(0, 500),
        ingredients: form.ingredients.trim().slice(0, 1500),
        steps: form.steps.trim().slice(0, 2500),
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
      setForm({ title: "", author: "", story: "", ingredients: "", steps: "" });
      setOpen(false);
    } catch (err) {
      console.error("Submit recipe error:", err);
      setError("Erro ao enviar a receita. Verifique as regras do Firestore.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="comunidade" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Receitas da Comunidade</span>
          <h2 className="mt-3 font-display text-5xl font-light leading-tight sm:text-6xl">
            As receitas <em className="italic text-gradient-warm">de vocês</em>.
          </h2>
          <p className="mt-4 max-w-xl text-foreground/70">
            Compartilhe a receita preferida da sua mãe. Outras pessoas também poderão se inspirar.
          </p>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-warm transition hover:scale-105"
        >
          <Plus className="h-4 w-4" /> {open ? "Fechar" : "Adicionar receita"}
        </button>
      </div>

      {open && (
        <form onSubmit={submit} className="mt-10 grid gap-4 rounded-3xl border border-border bg-gradient-card p-6 shadow-soft sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required maxLength={100} placeholder="Nome da receita" value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input required maxLength={60} placeholder="Seu nome (autor)" value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
          <textarea required maxLength={500} rows={2} placeholder="A história por trás dessa receita..." value={form.story}
            onChange={(e) => setForm({ ...form, story: e.target.value })}
            className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          <textarea required maxLength={1500} rows={4} placeholder="Ingredientes (um por linha)" value={form.ingredients}
            onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
            className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          <textarea required maxLength={2500} rows={5} placeholder="Modo de preparo (um passo por linha)" value={form.steps}
            onChange={(e) => setForm({ ...form, steps: e.target.value })}
            className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          <button type="submit" disabled={sending || !user}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-warm transition hover:scale-105 disabled:opacity-50">
            <Sparkles className="h-4 w-4" /> {sending ? "Enviando..." : "Publicar receita"}
          </button>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </form>
      )}

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.length === 0 && (
          <div className="col-span-full flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border py-12 text-center text-muted-foreground">
            <ChefHat className="h-8 w-8" />
            Nenhuma receita ainda. Seja o primeiro a contribuir!
          </div>
        )}
        {recipes.map((r) => (
          <article key={r.id} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
            <ChefHat className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-2xl font-semibold">{r.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">por {r.author}</p>
            <p className="mt-3 text-sm italic text-muted-foreground line-clamp-3">"{r.story}"</p>
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium text-primary">Ver receita</summary>
              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold">Ingredientes</h4>
                  <pre className="whitespace-pre-wrap font-sans text-foreground/80">{r.ingredients}</pre>
                </div>
                <div>
                  <h4 className="font-semibold">Modo de preparo</h4>
                  <pre className="whitespace-pre-wrap font-sans text-foreground/80">{r.steps}</pre>
                </div>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
