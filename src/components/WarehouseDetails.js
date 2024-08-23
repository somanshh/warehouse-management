import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWarehouse } from '../redux/actions';

const WarehouseDetails = ({ warehouse }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState(warehouse);
  const [customFields, setCustomFields] = useState({});
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWarehouse({ ...editedWarehouse, [name]: value });
  };

  const handleCustomFieldChange = (e) => {
    const { name, value } = e.target;
    setCustomFields({ ...customFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWarehouse = { ...editedWarehouse, ...customFields };
    dispatch(updateWarehouse(updatedWarehouse));
    setEditMode(false);
  };

  const addCustomField = () => {
    const fieldName = prompt('Enter custom field name:');
    if (fieldName) {
      setCustomFields({ ...customFields, [fieldName]: '' });
    }
  };

  if (editMode) {
    return (
      <form onSubmit={handleSubmit} className="warehouse-details edit-mode">
        <h2>Edit Warehouse</h2>
        <input name="name" value={editedWarehouse.name} onChange={handleInputChange} placeholder="Name" />
        <input name="city" value={editedWarehouse.city} onChange={handleInputChange} placeholder="City" />
        <input name="cluster" value={editedWarehouse.cluster} onChange={handleInputChange} placeholder="Cluster" />
        <input name="space_available" type="number" value={editedWarehouse.space_available} onChange={handleInputChange} placeholder="Space Available" />
        <select name="is_live" value={editedWarehouse.is_live.toString()} onChange={handleInputChange}>
          <option value="true">Live</option>
          <option value="false">Not Live</option>
        </select>
        {Object.entries(customFields).map(([key, value]) => (
          <input key={key} name={key} value={value} onChange={handleCustomFieldChange} placeholder={key} />
        ))}
        <button type="button" onClick={addCustomField} className="secondary">Add Custom Field</button>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditMode(false)} className="secondary">Cancel</button>
        </div>
      </form>
    );
  }

  return (
    <div className="warehouse-details">
      <h2>{warehouse.name}</h2>
      <p><strong>Code:</strong> {warehouse.code}</p>
      <p><strong>City:</strong> {warehouse.city}</p>
      <p><strong>Space Available:</strong> {warehouse.space_available}</p>
      <p><strong>Type:</strong> {warehouse.type}</p>
      <p><strong>Cluster:</strong> {warehouse.cluster}</p>
      <p><strong>Registered:</strong> {warehouse.is_registered ? 'Yes' : 'No'}</p>
      <p><strong>Live:</strong> {warehouse.is_live ? 'Yes' : 'No'}</p>
      {Object.entries(customFields).map(([key, value]) => (
        <p key={key}><strong>{key}:</strong> {value}</p>
      ))}
      <button onClick={() => setEditMode(true)}>Edit</button>
    </div>
  );
};

export default WarehouseDetails;