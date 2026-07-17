import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import type { NavItem } from '../Header/HeaderProps';
import type { FooterLink } from '../Footer/FooterProps';
import { DISCORD_URL, GITHUB_URL, MODDB_URL } from '../siteLinks';

/** The site wordmark, shared by the header and footer. */
const BRAND = 'ALAANKWA';

/**
 * Primary navigation. This is the site's route map in one place — the header is
 * handed it and renders it, holding no routes of its own.
 */
const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Wiki', to: '/wiki' },
];

/** Attribution shown in the footer. Litcube's Universe and X3 are not ours. */
const FOOTER_NOTE =
  'Alaankwa is a fan mod for Litcube’s Universe. Litcube’s Universe is the work of Litcube and its contributors; X3: Albion Prelude is a trademark of EGOSOFT. This site preserves the original wiki for the community. It is not affiliated with or endorsed by EGOSOFT.';

/** Outbound links: Alaankwa's own pages first, then the wider LU community. */
const FOOTER_LINKS: readonly FooterLink[] = [
  { label: 'Alaankwa on ModDB', href: MODDB_URL },
  { label: 'Join the Discord', href: DISCORD_URL },
  { label: 'Alaankwa on GitHub', href: GITHUB_URL },
  {
    label: 'LU on the EGOSOFT forum',
    href: 'http://forum.egosoft.com/viewtopic.php?t=365706',
  },
];

/**
 * The site chrome that wraps every routed page: a skip link, the header, the
 * `main` landmark the routed page renders into, and the footer. Used as the
 * parent layout route, so each page appears through the {@link Outlet}.
 *
 * @returns The full-height flex column shared by every page.
 */
export default function Layout() {
  return (
    <div className='app'>
      <a
        href='#main'
        className='skip-link'
      >
        Skip to content
      </a>
      <Header
        brand={BRAND}
        items={NAV_ITEMS}
      />
      <main id='main'>
        <Outlet />
      </main>
      <Footer
        brand={BRAND}
        note={FOOTER_NOTE}
        links={FOOTER_LINKS}
      />
    </div>
  );
}
