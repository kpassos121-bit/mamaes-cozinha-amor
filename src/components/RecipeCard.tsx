import { Link } from "@tanstack/react-router";
import type { Recipe } from "@/data/recipes";
import { Clock, Users, ChefHat, ArrowUpRight, Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import type { MouseEvent } from "react";

export function RecipeCard({ recipe, index }: { recipe: Recipe; index: number }) {
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(recipe.id);

  const onFav = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(recipe.id);
  };

  return (
    <Link
      to="/receita/$id"
      params={{ id: recipe.id }}
      className="group relative block overflow-hidden rounded-3xl border border-border/50 bg-gradient-card p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-warm"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition-all duration-700 group-hover:opacity-60 group-hover:scale-125"
        style={{ background: recipe.color }}
      />
      <button
        onClick={onFav}
        aria-label={fav ? "Remover dos favoritos" : "Favoritar"}
        className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition-all hover:scale-110 ${
          fav ? "bg-primary text-primary-foreground" : "bg-background/70 text-foreground"
        }`}
      >
        <Heart className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
      </button>
      <div className="relative flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl text-5xl shadow-soft transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
            style={{ background: `color-mix(in oklab, ${recipe.color} 25%, white)` }}
          >
            {recipe.emoji}
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {recipe.category}
          </span>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
            {recipe.title}
          </h3>
          <p className="mt-2 text-sm italic text-muted-foreground">{recipe.tagline}</p>
        </div>

        <div className="flex items-center gap-4 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{recipe.time}</span>
          <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{recipe.servings}</span>
          <span className="flex items-center gap-1.5"><ChefHat className="h-3.5 w-3.5" />{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}
