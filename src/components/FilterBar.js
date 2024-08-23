import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterWarehouses } from '../redux/actions';

const FilterBar = () => {
  const [filters, setFilters] = useState({ city: '', cluster: '', spaceAvailable: '' });
  const dispatch = useDispatch();
  const warehouses = useSelector(state => state.warehouses);

  const cities = [...new Set(warehouses.map(w => w.city))];
  const clusters = [...new Set(warehouses.map(w => w.cluster))];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    dispatch(filterWarehouses(newFilters));
  };

  return (
    <div className="filter-bar">
      <select name="city" value={filters.city} onChange={handleFilterChange}>
        <option value="">All Cities</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <select name="cluster" value={filters.cluster} onChange={handleFilterChange}>
        <option value="">All Clusters</option>
        {clusters.map(cluster => (
          <option key={cluster} value={cluster}>{cluster}</option>
        ))}
      </select>
      <input
        type="number"
        name="spaceAvailable"
        placeholder="Min Space Available"
        value={filters.spaceAvailable}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterBar;