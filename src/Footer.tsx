import React from 'react';

import './Footer.css';

/**
 * Footer component for the application.
 *
 * This component renders a footer containing a link to download a PDF version of the Wormhole Primer.
 * The footer is styled using the external Footer.css file.
 */
const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p>
        <a
          href='https://github.com/temetvince/eve-wormhole-primer/blob/main/WormholePrimer.pdf'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Download the Wormhole Primer PDF'
        >
          Download the PDF!
        </a>
      </p>
    </footer>
  );
};

export default Footer;
