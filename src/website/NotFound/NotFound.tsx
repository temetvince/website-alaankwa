import { Link } from 'react-router-dom';

/**
 * The fallback page for an unmatched route. Offers a route back to the two
 * things a visitor is likely looking for.
 *
 * @returns The composed 404 page. Holds the page's single `h1`.
 */
export default function NotFound() {
  return (
    <div className='container page'>
      <p className='eyebrow'>Error 404</p>
      <h1>Lost in the void</h1>
      <p className='page__lead'>
        That page is not on the map. It may have jumped to a different sector.
      </p>
      <p>
        Head back to the <Link to='/'>home page</Link>, browse the{' '}
        <Link to='/downloads'>downloads</Link>, or open the{' '}
        <Link to='/wiki'>wiki</Link>.
      </p>
    </div>
  );
}
