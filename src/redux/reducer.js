import warehouseData from "../data/warehouses";

const initialState = {
  warehouses: warehouseData,
  filteredWarehouses: warehouseData,
  currentPage: 1,
  itemsPerPage: 6,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_WAREHOUSES":
      const searchTerm = action.payload.toLowerCase();

      const searchResults = state.warehouses.filter(
        (warehouse) =>
          warehouse.name.toLowerCase().includes(searchTerm) ||
          warehouse.city.toLowerCase().includes(searchTerm)
      );
      return {
        ...state,
        filteredWarehouses: searchResults,
        currentPage: 1,
      };
    case "FILTER_WAREHOUSES":
      const filteredResults = state.warehouses.filter(
        (warehouse) =>
          (action.payload.city
            ? warehouse.city === action.payload.city
            : true) &&
          (action.payload.cluster
            ? warehouse.cluster === action.payload.cluster
            : true) &&
          (action.payload.spaceAvailable
            ? warehouse.space_available >= action.payload.spaceAvailable
            : true) &&
          (action.payload.name
            ? warehouse.name.toLowerCase().includes(action.payload.name)
            : true)
      );
      return {
        ...state,
        filteredWarehouses: filteredResults,
        currentPage: 1,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "UPDATE_WAREHOUSE":
      const updatedWarehouses = state.warehouses.map((warehouse) =>
        warehouse.id === action.payload.id
          ? { ...warehouse, ...action.payload }
          : warehouse
      );
      return {
        ...state,
        warehouses: updatedWarehouses,
        filteredWarehouses: updatedWarehouses,
      };
    default:
      return state;
  }
};

export default rootReducer;
