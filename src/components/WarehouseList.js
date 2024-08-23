import React from 'react';
import { Link } from 'react-router-dom';

const WarehouseList = ({ warehouses }) => {
  return (
    <div className="warehouse-list">
      {warehouses.map(warehouse => (
        <div key={warehouse.id} className="warehouse-item">
          <h3>{warehouse.name}</h3>
          <p><strong>City:</strong> {warehouse.city}</p>
          <p><strong>Space Available:</strong> {warehouse.space_available}</p>
          <p><strong>Type:</strong> {warehouse.type}</p>
          <Link to={`/warehouse/${warehouse.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default WarehouseList;