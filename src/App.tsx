import React, { useState } from "react";
import { getPages } from "./Pages";
import Footer from "./Footer";

import "./App.css";

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

   // Get the array of pages from the Pages module
   const pages: Page[] = getPages(setCurrentPage);

   // Calculate the total number of pages
   const totalPages: number = pages.length;

   /**
    * Navigates to a specific page while ensuring the page number
    * is within the valid range (1 to totalPages).
    *
    * @param pageNumber - The page number to navigate to
    */
   const navigateToPage = (pageNumber: number) => {
      setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));

      // Scroll to the top of the page when navigating
      window.scrollTo({
         top: 0,
         behavior: "auto",
      });
   };

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
      <div className="root">
         <div className="container">
            {/* Render the current page content */}
            {pages[currentPage - 1].content}

            {/* Pagination controls */}
            <div className="pagination">
               <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  aria-label="Previous Page"
               >
                  Previous
               </button>
               <span>
                  Page {currentPage} of {totalPages}
               </span>
               <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  aria-label="Next Page"
               >
                  Next
               </button>
            </div>

            {/* Button to return to the Table of Contents */}
            <button
               id="toc-button"
               onClick={() => setCurrentPage(1)}
               aria-label="Go to Table of Contents"
            >
               <div className="button-label">TOC</div>
            </button>
         </div>

         <Footer />
      </div>
   );
};

export default App;
