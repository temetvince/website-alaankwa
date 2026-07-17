import type { LoadState } from './wikiTypes';

/**
 * Props for the {@link WikiArticle}.
 *
 * @remarks
 * The article is presentational: it renders the title and whatever load state
 * it is handed, and reports internal-link clicks upward rather than navigating
 * itself. The composing page owns the fetch and the router.
 */
export interface WikiArticleProps {
  /** The page title, rendered as the article's sole `h1`. */
  readonly title: string;
  /** Load state of the page's HTML fragment. */
  readonly state: LoadState<string>;
  /**
   * Called when a same-origin link inside the article body is activated, with
   * the link's absolute in-site path (e.g. `/wiki/FAQ`). The handler is
   * expected to perform client-side navigation. Preconditions: the default
   * browser navigation has already been suppressed.
   */
  readonly onNavigate: (path: string) => void;
}
