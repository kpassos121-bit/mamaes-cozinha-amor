import { useEffect, useState, type FormEvent } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { Heart, Send, MessageCircleHeart } from "lucide-react";

type Message = {
  id: string;
  name: string;
  message: string;
  createdAt?: { toMillis: () => number } | null;
};

export function MessageWall() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(30));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setMessages(
          snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Message, "id">) })),
        );
      },
      (err) => {
        console.error("Messages snapshot error:", err);
        setError("Não foi possível carregar as mensagens.");
      },
    );
    return unsub;
  }, []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim().slice(0, 60);
    const trimmedText = text.trim().slice(0, 400);
    if (!trimmedName || !trimmedText || !user) return;
    setSending(true);
    setError(null);
    try {
      await addDoc(collection(db, "messages"), {
        name: trimmedName,
        message: trimmedText,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
      setText("");
    } catch (err) {
      console.error("Send message error:", err);
      setError("Não foi possível enviar sua mensagem. Verifique as regras do Firestore.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="mural" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Mural de Carinho
        </span>
        <h2 className="mt-3 font-display text-5xl font-light leading-tight sm:text-6xl">
          Deixe um recado <em className="italic text-gradient-warm">para sua mãe</em>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Suas palavras ficam guardadas aqui, para sempre — visíveis a todos que passarem por este livro.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-gradient-card p-6 shadow-soft sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-[1fr_2fr]">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={60}
            required
            placeholder="Seu nome"
            className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={400}
            required
            placeholder="Escreva uma mensagem amorosa..."
            className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">{text.length}/400</span>
          <button
            type="submit"
            disabled={sending || !user}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-warm transition hover:scale-105 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {sending ? "Enviando..." : "Enviar com amor"}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
      </form>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {messages.length === 0 && (
          <div className="col-span-full flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border py-12 text-center text-muted-foreground">
            <MessageCircleHeart className="h-8 w-8" />
            Seja a primeira pessoa a deixar um recado.
          </div>
        )}
        {messages.map((m, i) => (
          <article
            key={m.id}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-warm"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <Heart className="h-5 w-5 fill-primary text-primary" />
            <p className="mt-3 font-display text-lg italic leading-relaxed text-foreground">
              "{m.message}"
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              — {m.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
