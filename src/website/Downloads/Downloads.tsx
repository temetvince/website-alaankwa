import { Link } from 'react-router-dom';
import { DISCORD_URL, MODDB_URL } from '../siteLinks';

import './Downloads.css';

/**
 * The downloads page. Everything Alaankwa distributes lives on ModDB, so this
 * page is a referral: it explains what is published there, sends visitors to the
 * ModDB page, and points at the install docs and the on-site wiki.
 *
 * @returns The composed downloads page. Holds the page's single `h1`.
 */
export default function Downloads() {
  return (
    <div className='container page'>
      <p className='eyebrow'>Distribution</p>
      <h1>Downloads</h1>
      <p className='page__lead'>
        Alaankwa and everything it needs are published on ModDB. That is where
        the mod, the base Litcube’s Universe files, and the archived wiki all
        live — hosted properly, virus-free, in one place.
      </p>

      <p className='moddb-cta'>
        <a
          className='button button-primary'
          href={MODDB_URL}
          target='_blank'
          rel='noopener noreferrer'
        >
          Get Alaankwa on ModDB
        </a>
        <a
          className='button button-secondary'
          href={DISCORD_URL}
          target='_blank'
          rel='noopener noreferrer'
        >
          Join the Discord
        </a>
      </p>

      <section className='download-group'>
        <h2>What you’ll find there</h2>
        <ul className='download-list'>
          <li className='card download'>
            <h3 className='download__name'>Alaankwa + Litcube’s Universe</h3>
            <p className='download__desc'>
              The complete mod: Alaankwa layered onto Litcube’s Universe, ready
              to install. This is what you want to play. It is standalone — do
              not add other mods on top of it.
            </p>
          </li>
          <li className='card download'>
            <h3 className='download__name'>
              Original Litcube’s Universe files
            </h3>
            <p className='download__desc'>
              The genuine, virus-free Litcube’s Universe installers, preserved
              as a separate download after the old mirrors went dark — the base
              Alaankwa is built on.
            </p>
          </li>
          <li className='card download'>
            <h3 className='download__name'>The Litcube’s Universe wiki</h3>
            <p className='download__desc'>
              The full LU wiki, archived alongside the files — and readable
              right here without downloading anything.
            </p>
            <Link
              className='download__link'
              to='/wiki'
            >
              Open the wiki →
            </Link>
          </li>
        </ul>
      </section>

      <section className='download-group'>
        <h2>Installing</h2>
        <p className='download-group__blurb'>
          Installing Alaankwa is easy. Download the{' '}
          <a
            href={MODDB_URL}
            target='_blank'
            rel='noopener noreferrer'
          >
            AlaankwaLU application
          </a>{' '}
          from ModDB, run it, and follow the prompts. Once you point it to your
          X3AP Steam install and no-steam exe, it will install Litcube’s
          Universe then layer Alaankwa on top. It also allows you to run the
          game, change the LU GUI theme, update Alaankwa, and view the original
          LU Wiki!
        </p>
      </section>
    </div>
  );
}
