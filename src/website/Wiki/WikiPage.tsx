import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WikiSidebar from './WikiSidebar';
import WikiArticle from './WikiArticle';
import { useWikiManifest, useWikiPage } from './useWiki';
import type { LoadState, WikiManifest } from './wikiTypes';

import './Wiki.css';

/** Slug shown at `/wiki` when the route carries no page. */
const DEFAULT_SLUG = 'Main_Page';

/**
 * Resolves a page's display title from the manifest, falling back to a
 * de-slugged form while the manifest is still loading or if the slug is unknown.
 *
 * @param manifest - The manifest load state.
 * @param slug - The current page slug.
 * @returns The page title to render as the article heading.
 */
function titleFor(manifest: LoadState<WikiManifest>, slug: string): string {
  if (manifest.status === 'ready') {
    for (const section of manifest.data.sections) {
      for (const page of section.pages) {
        if (page.slug === slug) return page.title;
      }
    }
  }
  return slug.replaceAll('_', ' ');
}

/**
 * The wiki route: a persistent page index beside the current article. Owns the
 * two fetches (the navigation manifest and the page fragment) and the router,
 * and hands plain data down to the presentational sidebar and article.
 *
 * @returns The composed two-column wiki view. The article holds the page `h1`.
 */
export default function WikiPage() {
  const { slug: slugParam } = useParams();
  const slug = slugParam ?? DEFAULT_SLUG;
  const navigate = useNavigate();

  const manifest = useWikiManifest();
  const page = useWikiPage(slug);
  const title = titleFor(manifest, slug);

  const handleNavigate = useCallback(
    (path: string) => {
      void navigate(path);
    },
    [navigate],
  );

  // A new article starts at the top, as a fresh page load would.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className='container wiki'>
      <div className='wiki__layout'>
        <aside className='wiki__sidebar'>
          {manifest.status === 'ready' && (
            <WikiSidebar
              sections={manifest.data.sections}
              currentSlug={slug}
            />
          )}
          {manifest.status === 'loading' && (
            <output className='wiki__aside-status'>Loading index…</output>
          )}
          {manifest.status === 'error' && (
            <p
              className='wiki__aside-status'
              role='alert'
            >
              {manifest.message}
            </p>
          )}
        </aside>
        <WikiArticle
          title={title}
          state={page}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
}
