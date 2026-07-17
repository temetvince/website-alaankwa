/**
 * A single primary-navigation destination.
 *
 * @remarks
 * `to` is an in-site router path, never an external URL — the header renders
 * each item as a client-side {@link https://reactrouter.com | react-router}
 * link. `end` mirrors react-router's `NavLink` semantics: when `true`, the item
 * is marked current only on an exact path match, so a root link (`/`) does not
 * stay highlighted on every nested route.
 */
export interface NavItem {
  /** Visible link text. */
  readonly label: string;
  /** In-site path this item routes to. */
  readonly to: string;
  /** Match the active state on an exact path only. Defaults to `false`. */
  readonly end?: boolean;
}

/**
 * Props for the site {@link Header}.
 *
 * @remarks
 * The header is presentational: it renders the brand and the navigation it is
 * handed and reads nothing from the environment. The composing layout owns the
 * wordmark copy and the route list.
 */
export interface HeaderProps {
  /** Wordmark text shown at the left, linking to the site root. */
  readonly brand: string;
  /** Primary navigation destinations, rendered left to right. */
  readonly items: readonly NavItem[];
}
