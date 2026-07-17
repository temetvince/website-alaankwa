import type { FooterProps } from './FooterProps';

import './Footer.css';

/**
 * The site's closing band: wordmark, an attribution/disclaimer line, and a row
 * of outbound links. Rendered once per page inside the layout, below `main`.
 *
 * @param props - The brand, the attribution note, and the outbound links.
 * @returns A `contentinfo`-role footer.
 */
export default function Footer({ brand, note, links }: FooterProps) {
  return (
    <footer className='site-footer'>
      <div className='container site-footer__inner'>
        <p className='site-footer__brand'>{brand}</p>
        <p className='site-footer__note'>{note}</p>
        {links.length > 0 && (
          <ul className='site-footer__links'>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
