# Warehouse Management System

This project is a React-based warehouse management system that allows users to view, search, filter, and edit warehouse information.

## Setup Instructions

1. Clone the repository:
git clone https://github.com/your-username/warehouse-management.git
cd warehouse-management

2. Install dependencies:
npm install

3. Start the development server:
npm start

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Testing the Application

1. **Viewing Warehouses:**
- On the home page, you'll see a list of all warehouses.
- Each warehouse card displays basic information and a link to view details.

2. **Searching Warehouses:**
- Use the search bar at the top of the page to search for warehouses by name.
- The list will update in real-time as you type.

3. **Filtering Warehouses:**
- Use the dropdown menus to filter warehouses by city and cluster.
- Enter a minimum space available value to filter by space.
- The list will update based on your selected filters.

4. **Viewing Warehouse Details:**
- Click on the "View Details" link on any warehouse card.
- You'll be taken to a detailed view of that warehouse.

5. **Editing Warehouse Information:**
- On the warehouse details page, click the "Edit" button.
- Modify the warehouse information in the form that appears.
- Add custom fields by clicking the "Add Custom Field" button.
- Click "Save" to update the warehouse information or "Cancel" to discard changes.

6. **Responsive Design:**
- Test the application on different screen sizes to ensure it's responsive.

## Technologies Used

- React
- Redux for state management
- React Router for navigation
- CSS for styling

## Project Structure

- `src/components`: Contains all React components
- `src/pages`: Contains page-level components
- `src/redux`: Contains Redux store, actions, and reducers
- `src/App.js`: Main application component
- `src/index.js`: Entry point of the application

## Additional Notes

- This project uses a static JSON file for data. In a real-world scenario, you would typically fetch this data from an API.
- Custom fields are currently stored in component state. For persistence, you would need to update the Redux store and potentially send updates to a backend server.