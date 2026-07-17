/**
 * Regenerates the archived Litcube's Universe wiki into static assets the site
 * serves at runtime. This is a one-shot preprocessing step, not part of the
 * webpack build: it reads the mirrored MediaWiki HTML under `LUWIKI/`, keeps
 * only each page's article body, restyles nothing (the site's CSS does that),
 * and writes clean fragments the React wiki viewer fetches on demand.
 *
 * Inputs  (read-only): `LUWIKI/litcube.xtimelines.net/wiki/`
 * Outputs (overwritten): `public/wiki/pages/<slug>.html`, `public/wiki/images/**`,
 *                        `public/wiki/manifest.json`
 *
 * Run from the repo root:  `node scripts/build-wiki.mjs`
 *
 * The article HTML is trusted, static, author-controlled archive content. It is
 * cleaned here (comments, scripts, dead wiki chrome removed) and rendered in the
 * app via `dangerouslySetInnerHTML`; no untrusted input ever reaches that path.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const wikiSrc = join(root, 'LUWIKI', 'litcube.xtimelines.net', 'wiki');
const pagesSrc = join(wikiSrc, 'index.php');
// Served from `wiki-data`, deliberately NOT `wiki`: the SPA owns the `/wiki`
// route, and a static directory of the same name would shadow it (a direct load
// of `/wiki` redirects into the directory instead of the app).
const outRoot = join(root, 'public', 'wiki-data');
const pagesOut = join(outRoot, 'pages');

/**
 * Editorial ordering and grouping for the wiki navigation. Slugs listed here
 * render in this order under their heading; any page found on disk but not
 * listed is appended to "More" so nothing silently disappears.
 */
const SECTIONS = [
  {
    heading: 'Start here',
    slugs: ['Main_Page', 'What_is', 'Installation', 'CleanInstall', 'Download', 'RegisterEI', 'FAQ', 'Contactme', 'Acknowledgements'],
  },
  {
    heading: 'Changelogs',
    slugs: ['Change_Log', 'Change_Log_EI', 'BugList'],
  },
  {
    heading: 'Features',
    slugs: ['Features'], // Feature_* pages are appended automatically, sorted by title.
  },
  {
    heading: 'Scripting',
    slugs: ['LUScriptCannon', 'LocalVariables', 'SignalTargeted'],
  },
];

const ENTITIES = { '&#039;': "'", '&#39;': "'", '&amp;': '&', '&quot;': '"', '&lt;': '<', '&gt;': '>', '&nbsp;': ' ' };
const decode = (s) => s.replace(/&#0?39;|&amp;|&quot;|&lt;|&gt;|&nbsp;/g, (m) => ENTITIES[m] ?? m).trim();

const files = readdirSync(pagesSrc).filter((f) => f.endsWith('.html'));
const slugSet = new Set(files.map((f) => f.slice(0, -5)));

/** Pull the article body out of one mirrored MediaWiki page and clean it. */
function extract(raw, slugs) {
  const anchor = raw.indexOf('id="mw-content-text"');
  if (anchor === -1) return null;
  const bodyStart = raw.indexOf('>', anchor) + 1;
  const footer = raw.indexOf('<div class="printfooter">', bodyStart);
  let html = raw.slice(bodyStart, footer === -1 ? undefined : footer);

  html = html
    .replace(/<!--[\s\S]*?-->/g, '') // MediaWiki parser-cache comments
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    // The page title is rendered as the article's sole <h1>. A handful of pages
    // (e.g. the main page) use an <h1> inside the body; demote those to <h2> so
    // there is never a second <h1> and the heading order stays valid.
    .replace(/<(\/?)h1\b/gi, '<$1h2')
    .replace(/\s*<\/div>\s*$/, '') // trailing close of the mw-content-text wrapper
    // Image-description pages (File_*.html) don't exist in this build; unwrap
    // the link, keep the image it wrapped.
    .replace(/<a\b[^>]*href="(?:\.\/)?File_[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, '$1')
    .replace(/(src|srcset)="(?:\.\.\/)+images\//g, '$1="/wiki-data/images/');

  // Rewrite links: internal wiki pages become in-site routes; dead internal
  // links collapse to a no-op; external links are left for a later pass.
  html = html.replace(/href="([^"]+)"/g, (m, val) => {
    if (/^(https?:|mailto:|#)/i.test(val)) return m;
    const hash = /#.*$/.exec(val)?.[0] ?? '';
    const base = val.replace(/[?#].*$/, '').replace(/^(?:\.\/)+/, '');
    if (!base.endsWith('.html')) return m;
    const slug = base.slice(0, -5);
    return slugs.has(slug) ? `href="/wiki/${slug}${hash}"` : 'href="#"';
  });

  // Links into the mirror's old file tree (installers, banner, fonts) are dead
  // here; the real files live on the dedicated downloads page.
  html = html.replace(/href="(?:\.\.\/)+[^"]*"/g, 'href="/downloads"');

  // External links open in a new tab and never leak the referrer/opener.
  // Any pre-existing target/rel is dropped first so the result is well-formed.
  html = html.replace(/<a\b([^>]*)>/gi, (m, attrs) => {
    if (!/\bhref="https?:\/\//i.test(attrs)) return m;
    const cleaned = attrs.replace(/\s*\b(?:target|rel)="[^"]*"/gi, '');
    return `<a${cleaned} target="_blank" rel="noopener noreferrer">`;
  });

  return html.trim();
}

/** Human-readable title from the page's `<h1 id="firstHeading">`. */
function titleOf(raw, slug) {
  const h1 = /<h1 id="firstHeading"[^>]*>([\s\S]*?)<\/h1>/.exec(raw);
  return h1 ? decode(h1[1].replace(/<[^>]*>/g, '')) : slug.replace(/_/g, ' ');
}

rmSync(pagesOut, { recursive: true, force: true });
mkdirSync(pagesOut, { recursive: true });

const meta = new Map(); // slug -> title
for (const file of files) {
  const slug = file.slice(0, -5);
  const raw = readFileSync(join(pagesSrc, file), 'utf8');
  const body = extract(raw, slugSet);
  if (body === null) {
    console.warn(`skip (no article body): ${file}`);
    continue;
  }
  writeFileSync(join(pagesOut, `${slug}.html`), body, 'utf8');
  meta.set(slug, titleOf(raw, slug));
}

// Assemble the ordered manifest, folding every Feature_* page into "Features"
// and sweeping anything unlisted into "More".
const placed = new Set();
const sections = SECTIONS.map((section) => {
  let slugs = section.slugs.filter((s) => meta.has(s));
  if (section.heading === 'Features') {
    const features = [...meta.keys()].filter((s) => s.startsWith('Feature_')).sort((a, b) => meta.get(a).localeCompare(meta.get(b)));
    slugs = [...slugs, ...features];
  }
  slugs.forEach((s) => placed.add(s));
  return { heading: section.heading, pages: slugs.map((slug) => ({ slug, title: meta.get(slug) })) };
});
const leftovers = [...meta.keys()].filter((s) => !placed.has(s)).sort((a, b) => meta.get(a).localeCompare(meta.get(b)));
if (leftovers.length) sections.push({ heading: 'More', pages: leftovers.map((slug) => ({ slug, title: meta.get(slug) })) });

writeFileSync(join(outRoot, 'manifest.json'), `${JSON.stringify({ home: 'Main_Page', sections }, null, 2)}\n`, 'utf8');

// Copy every referenced image, preserving the hashed MediaWiki path so the
// rewritten `src="/wiki/images/..."` attributes resolve.
rmSync(join(outRoot, 'images'), { recursive: true, force: true });
cpSync(join(wikiSrc, 'images'), join(outRoot, 'images'), { recursive: true });

console.log(`wiki: ${meta.size} pages, ${sections.length} sections -> public/wiki-data/`);
