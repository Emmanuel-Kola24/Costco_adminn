import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Sidebar
import Sidebar from './components/shop/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import RegPage from './pages/RegPage';
import LoginPage from './pages/LoginPage';

import CreateProductPage from './pages/CreateProductPage';  // Import CreateProductPage
import CreateCategory from './pages/CreateCategory';
import ShowProductPage from './pages/ShowProductPage';
import ShowCategories from './pages/showCategories';
import PassChangePage from './pages/PassChangePage';
import axios from 'axios';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Track authentication
  const [showRegPage, setShowRegPage] = useState(false);  // Track whether to show RegPage
  const [merchantData, setMerchantData] = useState({});   // Initialize as an object

  return (
    <Router>
      <div >
        
         <Sidebar />
      
        <main>
          <Routes>
            {/* AUTH ROUTES */}
            <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setMerchantData={setMerchantData} />} />
            <Route path="/register" element={<RegPage setShowRegPage={setShowRegPage} />} />

            {/* APP PAGES */}
            <Route path="/" element={ <Dashboard /> } />
            <Route path="/products" element={ <ProductPage /> } />
            <Route path="/cart" element={ <CartPage /> } />
            <Route path="/shop" element={ <ShopPage />} />
            <Route path="/create_product" element={ <CreateProductPage merchantData={merchantData} /> } />
            <Route path="/create_category" element={ <CreateCategory merchantData={merchantData} />} />
            <Route path="/Password_Change" element={
              <PassChangePage
                merchant_id={merchantData.id}  // Pass merchant_id from merchantData
                setIsAuthenticated={setIsAuthenticated}
                setMerchantData={setMerchantData}
              />
            } />
            <Route path="/products/:id" element={<ShowProductPage merchantData={merchantData} /> } />
            <Route path="/categories" element={  <ShowCategories /> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;