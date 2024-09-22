// Molecules/SearchBar.js
import React from 'react';
import Input from './Input';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
