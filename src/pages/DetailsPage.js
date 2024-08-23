import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WarehouseDetails from '../components/WarehouseDetails';
import { selectWarehouses } from '../redux/selectors';

const DetailsPage = () => {
	const { id } = useParams();
	const warehouses = useSelector(selectWarehouses);
	const warehouse = warehouses.find((w) => w.id === parseInt(id));

	return (
		<div className="details-page page-main">
			<h1 className="details-header">Warehouse Details</h1>
			<div className="details-wrapper">
				{warehouse ? (
					<WarehouseDetails warehouse={warehouse} />
				) : (
					<p>Warehouse not found</p>
				)}
			</div>
		</div>
	);
};

export default DetailsPage;
