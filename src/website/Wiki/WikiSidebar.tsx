import { Link } from 'react-router-dom';
import type { WikiSidebarProps } from './WikiSidebarProps';

/**
 * The wiki's table of contents: every page, grouped by section, as in-site
 * links. The current page is marked with `aria-current` and a persistent
 * accent, so the cue does not rely on colour alone.
 *
 * @param props - The grouped navigation and the current slug to highlight.
 * @returns A `navigation` landmark labelled for assistive tech.
 */
export default function WikiSidebar({
  sections,
  currentSlug,
}: WikiSidebarProps) {
  return (
    <nav
      className='wiki-nav'
      aria-label='Wiki pages'
    >
      {sections.map((section) => (
        <div
          key={section.heading}
          className='wiki-nav__group'
        >
          <p className='wiki-nav__heading'>{section.heading}</p>
          <ul className='wiki-nav__list'>
            {section.pages.map((page) => {
              const isCurrent = page.slug === currentSlug;
              return (
                <li key={page.slug}>
                  <Link
                    to={`/wiki/${page.slug}`}
                    className={
                      isCurrent ? 'wiki-nav__link is-current' : 'wiki-nav__link'
                    }
                    aria-current={isCurrent ? 'page' : undefined}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
