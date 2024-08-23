import React from "react";
import { Link } from "react-router-dom";

const WarehouseList = ({ warehouses }) => {
  // prop destructuring
  return (
    <div className="warehouse-list-wrapper">
      <div className="warehouse-list">
        {warehouses.map((warehouse) => (
          <div key={warehouse.id} className="warehouse-item">
            <h3>{warehouse.name}</h3>
            <p>
              <strong>City:</strong> {warehouse.city}
            </p>
            <p>
              <strong>Space Available:</strong> {warehouse.space_available}
            </p>
            <p>
              <strong>Type:</strong> {warehouse.type}
            </p>
            <Link to={`/warehouse/${warehouse.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      {warehouses.length === 0 && (
        <div className="no-items-text">
          Oops! No warehouse listings found...
        </div>
      )}
    </div>
  );
};
// useCallback() , useMemo() , useEffect() , useState(), react framework vs libarary , lifecycle methods , props drilling , async await promises, JSX
export default WarehouseList;
