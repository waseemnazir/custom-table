// Molecules/Pagination.js
import React from 'react';
import Button from './Button';
import './Pagination.css';

const Pagination = ({ totalPages, currentPage, paginate }) => {
  return (
    <div className="pagination-container">
      {/* Total Pages Info */}
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>

      {/* Page Buttons */}
      <div className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;

