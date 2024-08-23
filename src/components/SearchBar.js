import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchWarehouses } from '../redux/actions';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    dispatch(searchWarehouses(term));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search warehouses"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;