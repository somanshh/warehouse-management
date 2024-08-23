import React from "react";
import { useSelector } from "react-redux";
import FilterBar from "../components/FilterBar";
import WarehouseList from "../components/WarehouseList";
import Pagination from "../components/Pagination";

const ListPage = () => {
  const { filteredWarehouses, currentPage, itemsPerPage } = useSelector(
    (state) => state
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWarehouses = filteredWarehouses.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="list-container">
      <h2>Warehouse Listing</h2>
      <div className="search-filter-container">
        <FilterBar />
      </div>
      <WarehouseList warehouses={currentWarehouses} />
      <Pagination />
    </div>
  );
};

export default ListPage;
