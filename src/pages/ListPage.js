import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import WarehouseList from '../components/WarehouseList';
import Pagination from '../components/Pagination';

const ListPage = () => {
  const { filteredWarehouses, currentPage, itemsPerPage } = useSelector(state => state);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWarehouses = filteredWarehouses.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h2>Warehouse Listing</h2>
      <div className="search-filter-container">
        <SearchBar />
        <FilterBar />
      </div>
      <WarehouseList warehouses={currentWarehouses} />
      <Pagination />
    </div>
  );
};

export default ListPage;