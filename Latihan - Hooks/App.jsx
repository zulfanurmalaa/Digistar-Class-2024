import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products'; // Import komponen Products
import CreateProduct from './CreateProduct'; // Import komponen CreateProduct

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/products/add" element={<CreateProduct />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
