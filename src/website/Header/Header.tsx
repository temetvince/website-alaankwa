import { Link, NavLink } from 'react-router-dom';
import type { HeaderProps } from './HeaderProps';

import './Header.css';

/**
 * Stable `NavLink` class callback. Defined at module scope so it is not a fresh
 * function on every render — a new inline function here would both defeat
 * `NavLink`'s memoisation and trip the react-perf lint gate.
 *
 * @param state - react-router's active-state flags for the link.
 * @returns The class list, with `is-active` appended for the current route.
 */
function navLinkClass({ isActive }: { readonly isActive: boolean }): string {
  return isActive ? 'site-nav__link is-active' : 'site-nav__link';
}

/**
 * The site's masthead: a wordmark that returns to the root and the primary
 * navigation. Rendered once per page inside the layout, above `main`.
 *
 * @param props - The brand wordmark and the navigation items to render.
 * @returns A `banner`-role header with an in-page `navigation` landmark.
 */
export default function Header({ brand, items }: HeaderProps) {
  return (
    <header className='site-header'>
      <div className='container site-header__inner'>
        <Link
          to='/'
          className='site-header__brand'
        >
          {brand}
        </Link>
        <nav
          className='site-nav'
          aria-label='Primary'
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end ?? false}
              className={navLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
