import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BrandPage from './pages/BrandPage';
import ProductLinePage from './pages/ProductLinePage';
import ModelPage from './pages/ModelPage';
import ProductDetailPage from './pages/ProductDetailPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrandPage />} />
        <Route path="/brand/:brandName" element={<ProductLinePage />} />
        <Route path="/brand/:brandName/line/:lineName" element={<ModelPage />} />
        <Route
          path="/brand/:brandName/line/:lineName/model/:modelName"
          element={<ProductDetailPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
