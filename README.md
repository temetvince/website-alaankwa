# Alaankwa · alaankwa.com

The website for **Alaankwa**, a standalone mod for **Litcube's Universe** (a total conversion of *X3: Albion
Prelude*). The site has three jobs:

- pitch Alaankwa and its headline feature — mobile **motherships** that build fleets — on the home page,
- send visitors to [ModDB](https://www.moddb.com/mods/alaankwa), where the mod and the preserved,
  virus-free Litcube's Universe files are published, and
- host the complete Litcube's Universe wiki, readable in the browser.

It is a React single-page app bundled by webpack. The wiki is served as pre-cleaned static HTML fragments
that the app fetches on demand, so the JavaScript bundle stays small no matter how many pages the archive
holds.

## Running and building

- **Develop:** `npm start` — builds once, then serves at <http://localhost:3000> with hot reload.
- **Build:** `npm run build` — runs the full gate in order (`lint` → `format` → `docs` → `typecheck` →
  `webpack --mode production`) and emits the production site to `dist/`.

The working agreement for changes lives in [`CLAUDE.md`](CLAUDE.md); read it before editing.

## How the wiki is built

The archived MediaWiki mirror lives under `LUWIKI/`. A one-shot script turns it into the static assets the
app serves:

```sh
node scripts/build-wiki.mjs
```

It reads each mirrored page, keeps only the article body, strips the dead wiki chrome, rewrites internal
links to in-site routes and image paths to `/wiki-data/images/…`, and writes:

- `public/wiki-data/pages/<slug>.html` — one cleaned fragment per page,
- `public/wiki-data/images/**` — every referenced image, and
- `public/wiki-data/manifest.json` — the grouped page index the wiki navigation renders from.

The output directory is `wiki-data`, not `wiki`, on purpose: the app owns the `/wiki` route, and a static
directory of the same name would shadow it.

The output is committed as static content. Re-run the script only when the source under `LUWIKI/` changes,
or when you change how pages are cleaned or grouped.

At runtime the app fetches the manifest for the sidebar and each fragment for the article it shows.
Everything under `public/` is copied verbatim into `dist/` at build time.

## Downloads and external links

The mod and its files are far too large to ship with the site (the LU base install alone is ~945 MB), so
everything is distributed through ModDB. The downloads page is a referral to it, not a file host.

The two outbound URLs — the ModDB page and the GitHub repo — live in one place,
[`src/website/siteLinks.ts`](src/website/siteLinks.ts). The home page, downloads page, and footer all import
them, so updating a link is a one-line change.

## Deploying

The build is a static site in `dist/`. Because routing is client-side, the host must serve `index.html` for
any unmatched path (SPA fallback) so that deep links such as `/wiki/FAQ` load. Most static hosts have a
one-line setting or redirect rule for this. The webpack dev server already does it via `historyApiFallback`.
