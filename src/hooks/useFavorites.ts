import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./useAuth";

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) return;
    const local = localStorage.getItem(`fav-${user.uid}`);
    if (local) setFavorites(new Set(JSON.parse(local)));
  }, [user]);

  const toggle = async (recipeId: string) => {
    if (!user) return;
    const next = new Set(favorites);
    const isFav = next.has(recipeId);
    if (isFav) next.delete(recipeId);
    else next.add(recipeId);
    setFavorites(next);
    localStorage.setItem(`fav-${user.uid}`, JSON.stringify([...next]));
    try {
      const ref = doc(db, "favorites", `${user.uid}_${recipeId}`);
      if (isFav) await deleteDoc(ref);
      else await setDoc(ref, { userId: user.uid, recipeId, createdAt: Date.now() });
    } catch (e) {
      console.error("Favorite sync error:", e);
    }
  };

  return { favorites, toggle, isFavorite: (id: string) => favorites.has(id) };
}
