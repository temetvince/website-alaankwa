import { Link } from 'react-router-dom';
import { DISCORD_URL, GITHUB_URL } from '../siteLinks';

import './Home.css';

/** A named addition, rendered as a card in a feature grid. */
interface Feature {
  /** Short heading. */
  readonly title: string;
  /** One or two sentences of detail. */
  readonly body: string;
}

/** What a mothership is and does — the mod's headline system. */
const MOTHERSHIP_POINTS: readonly string[] = [
  'Mobile TL-class factories with assembly lines whose output scales with the crew population aboard.',
  'Just-in-time manufacturing that builds several ware types at once — ships and ship equipment both.',
  'Full mobile docks, compatible with Litcube’s Universe Dockware Manager, so a mothership resupplies anywhere using Dock Agents.',
  'A blueprint data scanner: an alternative way to unlock ship blueprints without deconstructing them.',
];

/** The pile of quality-of-life and ship additions Alaankwa layers on. */
const QOL_FEATURES: readonly Feature[] = [
  {
    title: 'New fleet commands',
    body: 'Map Gates, Self Destruct, Manage Mothership, and Manage Wares join the ship command menu.',
  },
  {
    title: 'Smarter fleets',
    body: 'Standardised fleet operations with sensible escort following, and ships that park themselves upright instead of at odd angles.',
  },
  {
    title: 'Better economy AI',
    body: 'Universe Traders manage their own inventory, Quickshuttles report when they finish, and Trade Mk III pilots arrive at level 8.',
  },
  {
    title: 'Upgraded spacesuit',
    body: 'Your spacesuit gains SETA, trading, video enhancement, and bioware scanning (Litcube’s Universe edition).',
  },
  {
    title: 'Faster, longer-range combat',
    body: 'Rotational thrusters boosted across ship classes, extended weapon range, and stagger-fire effects that look the part.',
  },
  {
    title: 'Reach your motherships',
    body: 'A Quantum Jumpgate Extension lets you jump straight to any TL carrying a jump beacon.',
  },
];

/** The two new ways to begin a game. */
const GAMESTARTS: readonly Feature[] = [
  {
    title: 'Alaankwa Corsairs',
    body: 'Start lean and unlock blueprints by scanning the ships you take down — a scanner-and-salvage climb from nothing.',
  },
  {
    title: 'Alaankwa Corporation',
    body: 'Begin with a functioning empire already under you. Turn the difficulty up and Phanon will test every decision you make.',
  },
];

/**
 * The site's landing page. Makes the case for playing Alaankwa on top of
 * Litcube's Universe and X3: Albion Prelude, leads with the mothership system,
 * then covers the quality-of-life additions and the two new gamestarts.
 *
 * @returns The composed landing page. Holds the page's single `h1`.
 */
export default function Home() {
  return (
    <>
      <section className='hero'>
        <div className='container hero__inner'>
          <p className='eyebrow'>
            A mod for Litcube’s Universe · X3: Albion Prelude
          </p>
          <h1 className='hero__title'>ALAANKWA</h1>
          <p className='hero__lead'>
            X3: Albion Prelude is one of the deepest space sandboxes ever built.
            Litcube’s Universe reimagines it as an empire management simulator.
            Alaankwa is the layer on top: mobile motherships that construct
            whole fleets, a stack of quality-of-life upgrades, and two fresh
            ways to begin.
          </p>
          <div className='hero__actions'>
            <Link
              to='/downloads'
              className='button button-primary'
            >
              Get Alaankwa
            </Link>
            <a
              className='button button-secondary'
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className='container home-section'>
        <p className='eyebrow'>Why play it</p>
        <h2>One curated package, no loose ends</h2>
        <div className='home-prose'>
          <p>
            X3: Albion Prelude rewards patience with an economy and a galaxy you
            can genuinely shape. Litcube’s Universe is the definitive overhaul —
            it fixes, balances, and deepens that galaxy with empire management,
            competition, and an end-game enemy. Alaankwa takes that experience
            further, adding new systems and new starts while smoothing out the
            rough edges. It is a mod for a mod, and it is designed to be the
            last one you need.{' '}
            <strong>Do not stack other mods on top of it.</strong>
          </p>
        </div>
      </section>

      <section className='container home-section'>
        <p className='eyebrow'>The headline feature</p>
        <h2>Motherships</h2>
        <div className='home-prose'>
          <p>
            Alaankwa turns TL-class ships into <strong>motherships</strong>{' '}
            running Carrier Command Software — mobile shipyards that follow your
            fleet instead of anchoring you to a station.
          </p>
        </div>
        <ul className='mothership-list'>
          {MOTHERSHIP_POINTS.map((point) => (
            <li
              key={point}
              className='mothership-list__item'
            >
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className='container home-section'>
        <p className='eyebrow'>And a lot more</p>
        <h2>Quality-of-life, everywhere</h2>
        <ul className='card-grid feature-grid'>
          {QOL_FEATURES.map((feature) => (
            <li
              key={feature.title}
              className='card'
            >
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className='container home-section'>
        <p className='eyebrow'>Two ways to start</p>
        <h2>New gamestarts</h2>
        <ul className='card-grid gamestart-grid'>
          {GAMESTARTS.map((start) => (
            <li
              key={start.title}
              className='card'
            >
              <h3>{start.title}</h3>
              <p>{start.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className='container home-section'>
        <div className='home-cta'>
          <div>
            <p className='eyebrow'>Ready to fly</p>
            <h2>Get Alaankwa and LU</h2>
            <p className='home-cta__text'>
              Alaankwa, Litcube’s Universe, and the original LU files are
              published on ModDB. The full LU Wiki lives right here on this
              site.
            </p>
          </div>
          <div className='home-cta__actions'>
            <Link
              to='/downloads'
              className='button button-primary'
            >
              Downloads
            </Link>
            <a
              className='button button-secondary'
              href={DISCORD_URL}
              target='_blank'
              rel='noopener noreferrer'
            >
              Join the Discord
            </a>
            <Link
              to='/wiki'
              className='home-cta__link'
            >
              Read the wiki →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
