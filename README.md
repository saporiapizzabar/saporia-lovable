# Saporia Pizza Bar — website source

React + Vite + TypeScript project. Same design, content, and 6-language switcher as
the published version, split into editable components instead of one HTML file.

## Getting it into Lovable

Lovable can't import a zip or an existing GitHub repo directly — it only works the
other way (it creates the repo, then **pushes to** GitHub). So the way in is:

1. Create a new **empty** project in Lovable (any starter prompt, doesn't matter).
2. In that project: **Settings → GitHub → Connect to GitHub**, and let it create the repo.
3. Push this project's code into that same repo, on the branch Lovable is tracking
   (usually `main`):
   ```bash
   cd saporia-lovable
   git init
   git remote add origin <the-repo-url-lovable-created>
   git add .
   git commit -m "Saporia site"
   git branch -M main
   git push -u origin main --force
   ```
   (`--force` is needed the first time since Lovable's repo already has its own
   initial commit.)
4. Back in Lovable, the pushed code syncs in within a few seconds and becomes
   editable there, with full chat-based editing from then on.

## Running it yourself (no Lovable needed)

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
```
It's a normal static site after `npm run build` — deployable to Vercel, Netlify,
Cloudflare Pages, or anywhere else, with or without Lovable.

## Structure

- `src/i18n.ts` — all UI text (6 languages) + menu data + ingredient glossary
- `src/context/LanguageContext.tsx` — language switcher state/logic
- `src/components/` — one file per section (Nav, Hero, Reviews, About, Menu, Reserve, Order, Footer)
- `src/index.css` — all styling, brand colors as CSS variables (light/dark aware)
- `src/assets/` — logos and photos

## Notes

- The Google rating (4.9 / 465 reviews) is static text — refresh it periodically in
  `src/i18n.ts` (`badge_rating` and `about_p2` keys, all 6 languages).
- Fonts: Roboto Condensed + Playfair Display (Google Fonts, loaded in `index.html`).
  The "Saporia" wordmark uses the real logo files rather than a live font, since the
  original brand font isn't available to embed.
