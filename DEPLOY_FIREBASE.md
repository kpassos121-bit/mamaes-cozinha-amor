# Deploy no Firebase Hosting

O projeto está configurado em modo **SPA** (estático). Como todo o backend (Auth + Firestore) já roda no Firebase, não é necessário servidor Node.

## 1. Pré-requisitos (uma vez só)

```bash
npm install -g firebase-tools
firebase login
```

## 2. Build local

```bash
npm install   # ou: bun install
npm run build
```

Isso gera os arquivos estáticos em `dist/client/`.

## 3. Verifique o output

Confirme que existe `dist/client/index.html`. Se a pasta tiver outro nome
(ex.: `.output/public`), edite o campo `"public"` em `firebase.json`.

## 4. Deploy

```bash
firebase deploy --only hosting
```

A URL final será: **https://dia-das-maes-e1234.web.app/**

## Regras importantes do Firebase (uma vez no Console)

- **Authentication → Sign-in method → Anonymous → Ativar**
- **Firestore → Rules**: cole as regras enviadas anteriormente (mural,
  comunidade, favoritos).
- Em **Authentication → Settings → Authorized domains**, adicione
  `dia-das-maes-e1234.web.app` e `dia-das-maes-e1234.firebaseapp.com`
  (já vêm por padrão, mas confirme).

## Atualizações futuras

Cada nova versão é só:

```bash
npm run build && firebase deploy --only hosting
```
