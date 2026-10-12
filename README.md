# Schola Romana Ensemble — sito web

Sito statico costruito con [Astro](https://astro.build) e pubblicato su Cloudflare Pages.
Ricostruisce il vecchio sito Wix (stessa grafica, testi, immagini, audio) in italiano e inglese.

## Dove si modificano i contenuti

Tutti i testi sono in file Markdown (`.md`) dentro `src/content/`:

| Cosa | File |
|---|---|
| Home (news, concerti, citazioni, card dei programmi) | `src/content/home/en.md`, `src/content/home/it.md` |
| Pagine dei programmi, bio, media, recensioni | `src/content/pages/en/*.md`, `src/content/pages/it/*.md` |
| Articoli del blog | `src/content/blog/en/*.md`, `src/content/blog/it/*.md` |
| Menu, contatti, social, testi dell'interfaccia | `src/data/site.ts` |
| Album audio (tracce dei player) | `src/data/albums.json` + file in `public/audio/` |

Ogni file ha in alto un'intestazione (tra `---`) con i campi strutturati (titoli, immagini, gallerie,
video YouTube, ecc.) e sotto il testo principale in Markdown:
`**grassetto**`, `*corsivo*`, `[link](https://...)`, una riga vuota tra i paragrafi.

### Immagini
Le immagini stanno in `src/assets/images/` e si richiamano per nome file (es. `image: canticum-canticorum-hero.jpg`).
Astro le ottimizza automaticamente (WebP, più dimensioni).

### Nuovo articolo del blog
Copia un file esistente in `src/content/blog/it/` (o `en/`), cambia nome file (diventa l'indirizzo: `/it/post/nome-file`),
titolo, data e testo. Con `translationKey` uguale nelle due lingue, la bandierina collega le due versioni.

### Modulo contatti
Senza configurazione apre il programma di posta del visitatore. Per ricevere i messaggi direttamente:
crea una chiave gratuita su https://web3forms.com (con l'email scholaromana.ensemble@gmail.com) e incollala
in `web3formsKey` dentro `src/data/site.ts`.

## Pubblicazione

Ogni modifica salvata su GitHub (branch `main`) viene pubblicata da Cloudflare Pages in 1–2 minuti.
Impostazioni Cloudflare Pages: framework **Astro**, build command `npm run build`, output `dist`.

## Sviluppo in locale

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```
