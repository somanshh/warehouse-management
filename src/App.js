import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <div className="container">
            <h1>Warehouse Management</h1>
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </div>
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/warehouse/:id" element={<DetailsPage />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Warehouse Management System</p>
        </footer>
      </Router>
    </Provider>
  );
}

export default App;