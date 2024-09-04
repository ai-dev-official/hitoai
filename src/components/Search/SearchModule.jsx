import React from 'react';


const SearchModule = ({ searchTerm, setSearchModuleTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search items..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
    />
  );
};

export default SearchModule;
