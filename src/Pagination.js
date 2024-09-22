// Molecules/Pagination.js
import React from 'react';
import Button from './Button';

const Pagination = ({ totalPages, currentPage, paginate }) => {
  return (
    <div>
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
  );
};

export default Pagination;
