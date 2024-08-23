# Warehouse Management System

This project is a React-based warehouse management system that allows users to view, search, filter, and edit warehouse information.

## Setup Instructions

1. Clone the repository:
`git clone https://github.com/somanshh/warehouse-management.git`

2. `cd warehouse-management`

3. Install dependencies:
`npm install`

4. Start the development server:
`npm start`

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `src/components`: Contains all React components
- `src/pages`: Contains page-level components
- `src/redux`: Contains Redux store, actions, and reducers
- `src/App.js`: Main application component
- `src/index.js`: Entry point of the application

## About the Application

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
- Click "Save" to update the warehouse information or "Cancel" to discard changes.

