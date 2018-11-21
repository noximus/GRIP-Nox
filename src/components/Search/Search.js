import React from 'react';

const Search = () => {
  return (
    <span style={{display: 'flex', justifyContent: 'flex-end', height: '2rem', marginTop: '3rem', marginRight: '1rem'}}>
      <input
        type='search'
        placeholder='Search'
      />
    </span>
  );
}

export default Search;