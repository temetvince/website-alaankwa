import type { WikiSection } from './wikiTypes';

/**
 * Props for the {@link WikiSidebar}.
 *
 * @remarks
 * The sidebar is presentational. It receives the navigation and the current
 * slug and highlights the match itself — it does not read the router. The
 * composing page supplies both.
 */
export interface WikiSidebarProps {
  /** The grouped page navigation to render. */
  readonly sections: readonly WikiSection[];
  /** Slug of the page currently shown, marked as current in the list. */
  readonly currentSlug: string;
}
