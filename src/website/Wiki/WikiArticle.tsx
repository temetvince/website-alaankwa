import { useEffect, useMemo, useRef } from 'react';
import type { WikiArticleProps } from './WikiArticleProps';

/** Empty injection payload, used until the fragment has loaded. */
const EMPTY_MARKUP = { __html: '' } as const;

/**
 * Renders one wiki page: its title as the sole `h1`, then the cleaned HTML
 * fragment (or a loading/error message). Internal links inside the injected
 * body are intercepted and reported through `onNavigate` so they route without
 * a full page reload; external links and in-page anchors keep their default
 * behaviour.
 *
 * @param props - The title, the fragment's load state, and the navigate handler.
 * @returns The article region.
 *
 * @remarks
 * The fragment is trusted, build-time-cleaned archive content, injected via
 * `dangerouslySetInnerHTML`. The click listener is attached to the body node
 * directly (not a JSX handler on a non-interactive element), so activation works
 * by keyboard through the real anchors it delegates for.
 */
export default function WikiArticle({
  title,
  state,
  onNavigate,
}: WikiArticleProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  const markup = useMemo(
    () => (state.status === 'ready' ? { __html: state.data } : EMPTY_MARKUP),
    [state],
  );

  useEffect(() => {
    const body = bodyRef.current;

    // The DOM event object is an inherently mutable platform type; a listener
    // cannot receive it as deeply-readonly, and this one never mutates it.
    // oxlint-disable-next-line typescript/prefer-readonly-parameter-types
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      const href = anchor?.getAttribute('href');
      if (href === undefined || href === null) return;
      // A neutralised dead link: swallow the click, go nowhere.
      if (href === '#') {
        event.preventDefault();
        return;
      }
      // Any absolute in-site path routes client-side; external and in-page
      // anchor links fall through to the browser.
      if (href.startsWith('/')) {
        event.preventDefault();
        onNavigate(href);
      }
    };

    body?.addEventListener('click', onClick);
    return () => {
      body?.removeEventListener('click', onClick);
    };
  }, [onNavigate]);

  return (
    <article className='wiki-article'>
      <h1 className='wiki-article__title'>{title}</h1>
      {state.status === 'loading' && (
        <output className='wiki-article__status'>Loading…</output>
      )}
      {state.status === 'error' && (
        <p
          className='wiki-article__status'
          role='alert'
        >
          {state.message}
        </p>
      )}
      <div
        ref={bodyRef}
        className='wiki-body'
        dangerouslySetInnerHTML={markup}
      />
    </article>
  );
}
