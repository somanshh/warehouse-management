import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WarehouseDetails from '../components/WarehouseDetails';
import { selectWarehouses } from '../redux/selectors';

const DetailsPage = () => {
  const { id } = useParams();
  const warehouses = useSelector(selectWarehouses);
  const warehouse = warehouses.find(w => w.id === parseInt(id));

  return (
    <div>
      <h1>Warehouse Details</h1>
      {warehouse ? (
        <WarehouseDetails warehouse={warehouse} />
      ) : (
        <p>Warehouse not found</p>
      )}
    </div>
  );
};

export default DetailsPage;