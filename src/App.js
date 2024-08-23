import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="page-main container">
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
