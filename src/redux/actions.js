export const searchWarehouses = (searchTerm) => ({
    type: 'SEARCH_WAREHOUSES',
    payload: searchTerm,
  });
  
  export const filterWarehouses = (filters) => ({
    type: 'FILTER_WAREHOUSES',
    payload: filters,
  });
  
  export const setCurrentPage = (page) => ({
    type: 'SET_CURRENT_PAGE',
    payload: page,
  });
  
  export const updateWarehouse = (warehouseData) => ({
    type: 'UPDATE_WAREHOUSE',
    payload: warehouseData,
  });