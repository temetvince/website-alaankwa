/** An outbound link shown in the footer. */
export interface FooterLink {
  /** Visible link text. */
  readonly label: string;
  /** Absolute external URL; opened in a new tab. */
  readonly href: string;
}

/**
 * Props for the site {@link Footer}.
 *
 * @remarks
 * The footer is presentational. The composing layout supplies the wordmark, the
 * attribution/disclaimer copy, and any outbound links.
 */
export interface FooterProps {
  /** Wordmark text, echoing the header brand. */
  readonly brand: string;
  /** Attribution and legal note (e.g. trademark ownership). */
  readonly note: string;
  /** Outbound links, rendered in order. */
  readonly links: readonly FooterLink[];
}
