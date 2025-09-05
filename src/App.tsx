import React, { JSX, useState } from 'react';
import { getPages } from './Pages';
import Footer from './Footer';

import './App.css';

/**
 * Type definition for a single page in the application.
 * Each page includes an id, a title, and JSX content.
 */
type Page = {
  id: string;
  title: string;
  content: JSX.Element;
};

/**
 * The main App component renders the current page, pagination controls,
 * and a button to navigate back to the Table of Contents.
 */
const App: React.FC = () => {
  // State to track the current page number
  const [currentPage, setCurrentPage] = useState<number>(1);

  /**
   * Navigates to the specified page number.
   * If a function is provided, it will receive the previous page number.
   * The page number will be clamped to the range [1, totalPages].
   * If the page number is out of range, it will be clamped to the nearest valid page.
   * If the page number is already the current page, nothing will happen.
   * If the page number is the same as the current page, the page will scroll to the top.
   * If the page number is different from the current page, the page will scroll to the top.
   *
   * @param pageNumber The page number to navigate to, or a function that receives the previous page number.
   */
  const navigateToPage = (
    pageNumber: number | ((prevState: number) => number),
  ) => {
    if (typeof pageNumber === 'number') {
      setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
    } else {
      setCurrentPage((prevState) =>
        Math.max(1, Math.min(pageNumber(prevState), totalPages)),
      );
    }

    // Scroll to the top of the page when navigating
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  // Get the array of pages from the Pages module
  const pages: Page[] = getPages(navigateToPage);

  // Calculate the total number of pages
  const totalPages: number = pages.length;

  /**
   * Advances to the next page, unless already on the last page.
   */
  const handleNextPage = () => {
    navigateToPage(currentPage + 1);
  };

  /**
   * Goes back to the previous page, unless already on the first page.
   */
  const handlePrevPage = () => {
    navigateToPage(currentPage - 1);
  };

  return (
    <div className='root'>
      <div className='container'>
        {/* Render the current page content */}
        {pages[currentPage - 1].content}

        {/* Pagination controls */}
        <div className='pagination'>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-label='Previous Page'
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label='Next Page'
          >
            Next
          </button>
        </div>

        {/* Button to return to the Table of Contents */}
        <button
          id='toc-button'
          onClick={() => {
            navigateToPage(1);
          }}
          aria-label='Go to Table of Contents'
        >
          <div className='button-label'>TOC</div>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default App;
