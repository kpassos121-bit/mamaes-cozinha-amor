import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged, type User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJlludkyxyPyo5PEuBvqjckK2K4Px_hJI",
  authDomain: "dia-das-maes-e1234.firebaseapp.com",
  projectId: "dia-das-maes-e1234",
  storageBucket: "dia-das-maes-e1234.firebasestorage.app",
  messagingSenderId: "66061223635",
  appId: "1:66061223635:web:ca98857911b0f2872c7626",
  measurementId: "G-0HV9GFDBSW",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export async function initAnalytics() {
  if (typeof window === "undefined") return;
  try {
    const { getAnalytics, isSupported } = await import("firebase/analytics");
    if (await isSupported()) getAnalytics(app);
  } catch {
    /* noop */
  }
}

export function ensureAnonAuth(): Promise<User> {
  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        unsub();
        resolve(user);
      } else {
        signInAnonymously(auth).catch(reject);
      }
    });
  });
}
